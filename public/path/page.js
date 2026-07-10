import { h2, p } from "/app.js";
import a from "./a/page.js";
import b from "./b/page.js";

export default { 
    preview(){
        h2("This is /path/");
        p("This could be a preview, but this page might not need one.");
    },

    render(){
        this.full();
    },

    content(){
        p("This is the full content.  There's `a.preview()` below:");
        a.preview();
        p("There's `b.preview()` below:");
        b.preview();
    },

    full(){
        this.preview();
        this.content();
    }
}