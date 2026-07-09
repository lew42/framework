import app, { h1, p } from "/app.js";
import test_obj from "./is.node.test.js";

app.$root.ac("page");
h1("is");
p("Type-checking helpers. `is.dom`, `is.el`, `is.mobile` are browser-only.");

test_obj.render();
