import { a, h2, p } from "/app.js";
import subpage from "./subpage/page.js";

export default {
  render() {
    h2("Alex's page");
    p("Content example with a subpage", subpage.link())
  },
};
