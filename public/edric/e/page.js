import { p, a } from "/app.js";

export default {

    link(){
        return a.c("page-link", "/edric/e/").href("/edric/e/"); // abs path? !! MUST RETURN
    },

    render(){
        a.c("page-back", "Back").href("../");
        p("This is the rest of the content for e");
    }
}
