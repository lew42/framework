import { a, h2, p } from "/app.js";
import nested from "./nested/page.js"

export default {
  link() {
    return a.c("page-link", "/alex/subpage/").href("/alex/subpage/");
  },
  render() {
    a.c("page-back", "Back").href("../");
    h2("Alex's subpage");
    p("Subpage content with a nested subpage: ", nested.link());
  },
};
