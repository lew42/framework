import Events from "../../Events.js";

// Socket gets created by SocketServer

export default class Socket extends Events {

	/**
	 * ws, req, server, socket_server get passed from SocketServer
	 */

    initialize() {
		console.log("New socket initialized");
        this.ws.on("message", this.message.bind(this));
        this.ws.on("close", this.close.bind(this));
    }

    message(data) {
        try {
            const message = JSON.parse(data.toString());
            this.emit("message", message);
			console.log("Socket message", message);

            if (message.method) {
				console.log(`RPC: ${message.method}`);
                this.emit(`rpc:${message.method}`, message.args, message.index);
            }
        } catch (e) {
            console.error("Failed to parse socket message", e);
        }
    }

    send(obj) {
        this.ws.send(JSON.stringify(obj));
    }

    rpc(method, ...args) {
        this.send({ method, args });
    }

    close() {
        this.socket_server.sockets = this.socket_server.sockets.filter(socket => socket !== this);
        this.emit("closed");
    }
}
