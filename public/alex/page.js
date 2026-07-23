import app, { h2, p, Page } from "/app.js";
import subpage from "./subpage/page.js";

export default new class AlexPage extends Page {
	title = "Alex";

	on_activate() {
		super.on_activate();
		document.documentElement.lang = "en";
	}

	render() {
		app.$body.ac("theme-1");
		h2("Alex's page");
		p("Content example with a subpage: ", subpage.link());
	}
}
