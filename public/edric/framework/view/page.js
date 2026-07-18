import { h1, h2, p, a, pre } from "/app.js";

app.$body.ac("theme-1");

export default {

    link(){
        return a.c("page-link", "View").href("/edric/framework/view/"); // abs path? !! MUST RETURN
    },

    render(){
        a.c("page-back", "Back").href("../");

        h1("View");

        p("Every tag function (`h1, p, div, a`...) returns a `View`, wrapping one DOM element. You mostly just call methods on it:");
        pre(`div.c("flex gap", () => {
    p("child 1");
    p("child 2");
});`);

        h2("Classes");
        p("`.c(\"cls\")`:create with a class, e.g. `div.c(\"flex gap\")`.");
        p("`.ac(\"cls\")`:add a class (or several, space-separated).");
        p("`.rc(\"cls\")`:remove a class.");
        p("`.hc(\"cls\")`:check if it has a class.");
        p("`.tc(\"cls\")`:toggle a class on/off.");

        h2("Content");
        p("`.append(...)`:add children: views, text, DOM nodes, arrays, or a function that builds them.");
        p("`.prepend(...)`:same, but adds to the start.");
        p("`.empty(...)`:clear all children, optionally append new ones.");
        p("`.text(value)`:get or set the text content.");
        p("`.html(value)`:get or set the inner HTML.");
        p("Inside `p(...)`, text wrapped in backticks (like this) automatically becomes `code`.");

        h2("Attributes & events");
        p("`.attr(name, value)`:get or set an HTML attribute.");
        p("`.href(url)`:shortcut for `.attr(\"href\", url)`.");
        p("`.style(prop, value)`:get or set inline CSS. Pass an object to set several at once.");
        p("`.on(event, cb)` / `.off(event, cb)`:add or remove an event listener.");
        p("`.click(cb)`:shortcut for `.on(\"click\", cb)`.");

        h2("Visibility & structure");
        p("`.hide()` / `.show()` / `.toggle()`:control `display`.");
        p("`.remove()`:remove it from the page.");
        p("`.replace(view)`:swap it out for another view.");
        p("`.clone()` / `.repeat(n)`:duplicate it.");
        p("`.append_to(view)` / `.prepend_to(view)`:attach it somewhere else instead.");

        h2("Loading other files");
        p("`.load(meta, url)`:dynamically import a module and append its default export.");
        p("`.lazy(meta, url)`:same as `.load()`, but waits its turn behind earlier `.lazy()` calls.");

        p("There are a few more internal methods (`prerender`, `classify`, `buffer`/`flush`...) the framework uses under the hood:you won't need to call those directly when starting out.");
    }
}
