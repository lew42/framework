import app, { a, h2, h3, p, Page } from "/app.js";

export default new class NestedPage extends Page {
	title = "Nested subpage";
	href = "/alex/subpage/nested/";

	link() {
		return a.c("page-link", this.href).href(this.href);
	}

	preview() {
		a.c("page-link-block", () => {
			h2("Preview");
			p("Preview text");
		}).href(this.href);
	}

	content() {
		h3("Alex's subpage");
		p("Nested subpage content");
	}

	full() {
		a.c("page-back", "Back").href("../");
		this.preview();
		this.content();
	}

	render() {
		app.$body.ac("theme-1");
		this.full();
	}
}
