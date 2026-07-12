import { a, p } from "/app.js";
export default {
  link() {
    return a.c("page-link", "/path-1/a/").href("/path-1/a/");
  },
  render() {
    a.c("page-back", "Back").href("../");
    h2("Alex's subpage");
    p("Subpage content");
  },
};
