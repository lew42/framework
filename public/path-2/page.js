import { h2, p, a } from "/app.js";
import page_a from "./a/page.js";
import b from "./b/page.js";

export default { 
    preview(){
        a("Home").href("/");
        h2("This is /path-2/");
        p("This could be a preview, but this page might not need one.");
    },

    render(){
        this.full();
    },

    content(){
        p("This is the full content.  There's `a.preview()` below:");
        page_a.preview();
        p("There's `b.preview()` below:");
        b.preview();
    },

    full(){
        this.preview();
        this.content();
    }
}