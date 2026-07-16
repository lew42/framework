import { p, a } from "/app.js";

app.$body.ac("theme-1");

export default {

    link(){
        return a.c("page-link", "/edric/c/").href("/edric/c/"); // abs path? !! MUST RETURN
    },

    render(){
        a.c("page-back", "Back").href("../");
        p("This is the rest of the content for c");
    }
}
