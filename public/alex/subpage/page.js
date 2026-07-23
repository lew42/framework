import app, { a, h2, h3, p, Page } from "/app.js";
import nested from "./nested/page.js";

export default new class Subpage extends Page {
	title = "Alex's subpage";

	link() {
		return a.c("page-link", "/alex/subpage/").href("/alex/subpage/");
	}

	render() {
		app.$body.ac("theme-1");
		a.c("page-back", "Back").href("../");
		h2("Alex's subpage");
		h3("Preview");
		nested.preview();
		p("Subpage content with a nested subpage: ", nested.link());
	}
}
