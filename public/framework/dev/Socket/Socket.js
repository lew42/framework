function promise(){
	let resolve, reject;
	const promise = new Promise((res, rej) => {
		resolve = res;
		reject = rej;
	});
	promise.resolve = resolve;
	promise.reject = reject;
	return promise;
}

export default class Socket {
	static singleton() {
		if (!this._instance) {
			this._instance = new this();
		}
		return this._instance;
	}

	constructor(...args){
        this.assign(...args);
        this.initialize();
    }

    assign(...args){
        return Object.assign(this, ...args);
    }

	initialize() {
		this.protocol = window.location.protocol === "https:" ? "wss" : "ws";
		this.requests = [];
		this.fails = 0;
		this.ready = promise();

		// Only a local dev server speaks this protocol. On a static host
		// (production deploy) there's nothing to connect to, so don't even
		// try — just stay disabled and let send()/request() no-op.
		if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1" || window.location.hostname.endsWith(".localhost")) {
			this.connect();
		} else {
			this.disabled = true;
			this.ready.resolve();
		}
	}
	connect() {
		this.ready = promise();
		this.ws = new WebSocket(this.protocol + "://" + window.location.host);
		this.ws.addEventListener("open", () => this.open());
		this.ws.addEventListener("message", res => this.message(res));
		this.ws.addEventListener("close", () => {
			console.warn("Socket closed, attempting reconnect");
			// this will refresh .ready (and won't resolve unless reconnected),
			// which will prevent subsequent send()s until reconnected.
			this.connect();
		});
		this.ws.addEventListener("error", err => {
			console.warn("Socket error:", err, this.fails + " fails.");

			if (this.fails <= 3) {
				this.fails++;
				console.warn(`Attempting to reconnect in ${this.fails} second(s).`);
				setTimeout(() => this.connect(), 1000 * this.fails);
			} else {
				console.error("Socket error, giving up.");
				this.ready.reject(err);
			}
		});

	}
	open() {
		console.log("%cSocket connected.", "color: green; font-weight: bold;");
		// this.rpc("log", "connected!");
		this.ready.resolve();
	}
	// message recieved handler
	message(res) {
		// debugger;
		// console.log(res);
		const data = JSON.parse(res.data);

		// does the index exist
		if (data?.index in this.requests) {
			this.requests[data.index](data);
		} else {
			data.args = data.args || [];
			// console.log(data.method + "(", ...data.args, ")");
			if (this[data.method])
				this[data.method](...data.args);
		}
	}
	reload() {
		if (!window.$BLOCKRELOAD)
			window.location.reload();
		// debugger;
	}

	async send(obj) {
		if (this.disabled) return;
		// console.trace("sending", obj);
		await this.ready;
		this.ws.send(JSON.stringify(obj));
	}

	async request(obj) {
		if (this.disabled) return;
		let response = new Promise(resolve => {
			obj.index = this.requests.push(resolve) - 1;
		});

		await this.send(obj);


		return response;
	}

	async async_rpc(method, ...args){
		return this.request({ method, args });
	}

	rpc(method, ...args) {
		this.send({ method, args })
	}

	ls(dir) {
		return this.request({ method: "ls", args: [dir] });
	}

	// ls_response(data){
	// 	new FSView({ data })
	// }

	cmd(res) {
		console.log("cmd response:", res);
	}

	write(filename, data) {
		this.rpc("write", filename, data);
	}

	log() {
		console.log(...arguments);
	}

	rm(dir) {
		return this.request({ method: "rm", args: [dir] });
	}
}

/*

await socket.request() -> fulfills with response

request(){
	this.send({ request, id })

	this.response = new Promise()
}

*/