import { h2, p } from "/app.js";
import a from "./a/page.js";
import b from "./b/page.js";

export default function(){
    h2("This is /path-1/");
    p("There is ", a.link(), " and ", b.link());
}