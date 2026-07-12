import app, { el, p } from "/app.js";

export default function () {
    p("My name is Arya");
    el("ol", () => {
        el("li", "First item.");
        el("li", "Second item.");
        el("li", "Third item.");
    });
}