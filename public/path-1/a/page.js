import { h2, p, el, a } from "/app.js";

export default { 
    
    link(){
        return a.c("page-link", "A").href("/path-1/a/"); // abs path? !! MUST RETURN
    },

    render(){
        a.c("page-back", "Back").href("../");
        p("This is the rest of the content for /path/a/");
    }
}