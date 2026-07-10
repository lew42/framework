import app, { el, div, p, h1, a } from "/app.js";

h1("Hello World");

p("Check out ", a("path-1").href("/path-1/"), " and ", a("path-2").href("/path-2/"), ".");

p("Look at the code.  When the app loads a `/path/page.js`, it automatically appends whatever is exported, which could be a function or object that has a render method.");

p("I've thought about designing a Page class, maybe that's a good task?  There are a few variants in that `frozen-helix` repo.");

p("Create your `/<name>/` pages, leave this page alone :).  This time, we'll merge them all together.  What do you think about navigation?")