import { p, a } from "/app.js";

export default {

    link(){
        return a.c("page-link", "other").href("/edric/HTML/other/"); // abs path? !! MUST RETURN
    },

    render(){
        a.c("page-back", "Back").href("../");
        p("Great things will be build here");
    }
}
