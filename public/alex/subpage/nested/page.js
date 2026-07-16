import { a, h2, h3, p } from "/app.js";

export default {
  href: "/alex/subpage/nested/",
  link() {
    return a.c("page-link", this.href).href("/alex/subpage/nested/");
  },
  preview() {
    a.c("page-link-block", () => {
      h2("Preview");
      p("Preview text");
    }).href(this.href);
  },
  content() {
    h3("Alex's subpage");
    p("Nested subpage content");
  },
  full() {
    a.c("page-back", "Back").href("../");
    this.preview();
    this.content();
  },
  render() {
    this.full();
  },
};
