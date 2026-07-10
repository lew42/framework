import { h2, p, el, a } from "/app.js";

export default { 
    href: "/path-2/a/",
    preview(){
        a.c("page-link-block", () => {
            h2(this.href);
            p("This is the preview for " + this.href + ".");
        }).href(this.href);
    },

    render(){
        this.full();
    },

    content(){
        p("This is the rest of the content for " + this.href + ".");
    },

    full(){
        a.c("page-back", "Back").href("../");
        this.preview();
        this.content();
    }
}