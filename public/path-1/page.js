import { h2, p, a } from "/app.js";
import page_a from "./a/page.js"; // "a" was taken
import b from "./b/page.js";

export default function(){
    a("Home").href("/");
    h2("This is /path-1/");
    p("There are two sub pages: ", page_a.link(), " and ", b.link());
    p("You might notice, this file, `/path-1/page.js` imports `/path-1/a/page.js` and `/path-1/b/page.js`, and renders the links above.");
    p("Also, those two sub pages are loaded directly by the `app` as THE `page.js` when you navigate to `/path-1/a/`, for example.  In that case, the default export gets appended to the app.  When that happens, the `View` class automatically calls `obj.render()`, if it exists.");
}