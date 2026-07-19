import { el, div, View, h1, h2, h3, p, is } from "../View/View.js";
import Socket from "../../dev/Socket/Socket.js";

// this needs to load immediately, so the layers are properly defined
View.stylesheet(import.meta, "../../framework.css");

export default class App {

	constructor(...args) {
		this.loaders = []; // stylesheets and fonts (promises)
		this.assign(...args);
		this.instantiate();
	}

	async instantiate() {
		this.config(); // 1
		this.render(); // 2
		await this.load(); // 3
		this.initialize(); // 4
		this.inject(); // 5
		this.ready.resolve(); // 6
	}

	// 1. initial setup, requests
	config() {
		this.config_socket();
	}

	// 2. pre-render before page.js loading
	render() {
		this.$body = View.body();
		this.$app = div.c("app");

		View.set_captor(this.$app);
	}

	// 3. request and await the page, and then all the loaders
	async load() {
		// wait until page module has finished
		await this.load_page();

		// page module can add additional loaders (stylesheets, fonts)
		await this.loaded;
	}

	// 4. post render, pre-dom-injection
	initialize() {}

	// 5. inject this.$app into <body>
	inject() {
		this.$body.append(this.$app);
	}

	config_socket(){
		const h = window.location.hostname;
        if (h === "localhost" || h === "127.0.0.1" || h.endsWith(".localhost")) {
            this.socket = Socket.singleton();
        }
	}

	async load_page() { // 3
		// "/"          -> "/page.js"
		// "/path/"     -> "/path/page.js"
		// "/path/sub"  -> "/path/sub.page.js"  (file page)  OR
		//                 "/path/sub/page.js"  (dir page, slash-less)
		const candidates = App.path_to_page_urls(window.location.pathname);

		// probe candidates in order; the first that exists is the page
		const url = await App.resolve_page_url(candidates);

		if (!url) {
			console.error("Page not found", candidates.join(", "))
			return;
		}

		try {
			const mod = await import(url);

			// the page.js can, but doesn't need to export a default
			this.page = mod.default;

			// render the page
			if (this.page) {
				this.$app.append(this.page);
				// this.$root is not in the body yet
			}
		} catch (error) {
			// this runs on any page error...
			this.$app.append(() => {
				h1("Page Load Error");
				el.c("pre", "error", error.message);
				console.error(error);
			});
		}
	}

	// loads a predefined font (see Font class below)
	font(name) {
		if (!Font.fonts[name])
			throw "Unknown font";

		if (Font.fonts[name].font) {
			console.warn("font already loaded");
			return;
		}

		const font = new Font(Font.fonts[name]);
		// a failed font does not hang the app
		const loaded = font.load().catch((error) => {
			console.error("Font load error");
		});
		this.loaders.push(loaded); // save the promise
		Font.fonts[name].font = font; // cache the font
		return loaded; // allow await app.font(...)
	}

	stylesheet(meta, url) {
		return View.stylesheet(meta, url);
	}

	get ready() {
		if (!this._ready) {
			let resolve;
			this._ready = new Promise((res) => {
				resolve = res;
			});
			this._ready.resolve = resolve;
		}
		return this._ready;
	}

	get loaded() {
		return Promise.all(View.stylesheets.concat(this.loaders));
	}
	
	assign(...args) {
		return Object.assign(this, ...args);
	}

	static stylesheet(meta, url) {
		return View.stylesheet(meta, url);
	}

	// A page can be authored two ways, so a slash-less URL has two candidates:
	//   file page: "/path/sub"  -> "/path/sub.page.js"
	//   dir  page: "/path/sub"  -> "/path/sub/page.js"  (same as "/path/sub/")
	// A trailing slash is unambiguous: it's always a directory page.
	static path_to_page_urls(path) {
		// "/" -> "/page.js", "/path/" -> "/path/page.js"
		if (path.endsWith("/")) {
			return [path + "page.js"];
		}
		// slash-less: prefer the file page, fall back to the dir page
		return [path + ".page.js", path + "/page.js"];
	}

	// return the first candidate URL that actually exists (HEAD 200), or null
	static async resolve_page_url(candidates) {
		for (const url of candidates) {
			try {
				const res = await fetch(url, { method: "HEAD" });
				if (res.ok) return url;
			} catch (error) {
				// network error: try the next candidate
			}
		}
		return null;
	}

	static meta_path(meta, path) {
		return new URL(path, meta.url).href;
	}
}

class Font {
	constructor(...args) {
		Object.assign(this, ...args);
		this.fontface = new FontFace(this.name, `url(${this.url})`, this.options);
	}
	async load() {
		await this.fontface.load();
		document.fonts.add(this.fontface);
	}
}

Font.fonts = {
	Montserrat: {
		name: "Montserrat",
		url: "https://fonts.gstatic.com/s/montserrat/v30/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
		options: {
			weight: '100 900'
		}
	},
	"Material Icons": {
		name: "Material Icons",
		url: "https://fonts.gstatic.com/s/materialicons/v143/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2",
		options: {
			style: "normal",
			weight: "400"
		}
	}
};

export { App };
export * from "../View/View.js";