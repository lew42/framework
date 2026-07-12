import { h2, p, a } from "/app.js";
import b from "./b/page.js";
import c from "./c/page.js";
import d from "./d/page.js";
import e from "./e/page.js";
import HTML from "./HTML/page.js";

p("Edric's Page");
h2("This is /edric/");
p("Sub pages: ", HTML.link(), ", ", b.link(), ", ", c.link(), ", ", d.link(), ", and ", e.link());
