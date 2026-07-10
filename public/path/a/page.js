import { h2, p, el, a } from "/app.js";

export default { 
    preview(){
        a.c("page-link-block", () => {
            h2("Path / A");
            p("This is the preview sub page A.");
        }).href("/path/a/");
    },

    render(){
        this.full();
    },

    content(){
        p("This is the rest of the content for /path/a/");
    },

    full(){
        a.c("page-back", "Back").href("../");
        this.preview();
        this.content();
    }
}