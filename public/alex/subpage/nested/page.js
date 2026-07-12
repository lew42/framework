import { a, h2, p } from "/app.js";

export default {
  link() {
    return a.c("page-link", "/alex/subpage/nested/").href("/alex/subpage/nested/");
  },
  preview() {
    a.c("page-back", "Back").href("../");
    h2("Preview");
    p("Preview text");
  },
  content() {
    h3("Alex's subpage");
    p("Nested subpage content");
  },
  full() {
    this.preview();
    this.content();
  },
  render() {
    this.full();
  },
};
