import { a, h2, p } from "/app.js";

export default {
  link() {
    return a.c("page-link", "input").href("/alex/subpage/nested/");
  },
  render() {
    a.c("page-back", "Back").href("../");
    h2("Alex's subpage");
    p("Nested subpage content");
  },
};
