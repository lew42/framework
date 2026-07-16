import app, { el, div, p, h1, h2, a, code } from "/app.js";

export default function(){
    return el.c("nav", "flex gap", () => {
        div.c("nav-item", a("Home").href("/"));
        div.c("nav-item", a("Alex").href("/alex/"));
        div.c("nav-item", a("Arya").href("/arya/"));
        div.c("nav-item", a("Castin").href("/castin/"));
        div.c("nav-item", a("Edric").href("/edric/"));

    })
}