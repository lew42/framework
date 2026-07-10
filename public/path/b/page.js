import { h2, p, el, a } from "/app.js";

export default { 
    preview(){
        a.c("page-link-block", () => {
            h2("Path / B");
            p("This is the preview sub page B.");
        }).href("/path/b/");
    },

    render(){
        this.full();
    },

    content(){
        p("This is the rest of the content for /path/b/");
    },

    full(){
        a.c("page-back", "Back").href("../");
        this.preview();
        this.content();
    }
}