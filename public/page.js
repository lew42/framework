import app, { el, div, p, h1 } from "/app.js";

h1("Hello World");

p("Let's count to 10.");

el("ul", () => {
    for (let i = 1; i <= 10; i++){
        el("li", "This is item " + i + ".");
    }
});