import { h2, p, a } from "/app.js";
import other from "./other/page.js";
import input from "./input/page.js";

export default {

    link(){
        return a.c("page-link", "HTML").href("/edric/HTML/"); // abs path? !! MUST RETURN
    },

    render(){
        a.c("page-back", "Back").href("../");
        h2("This is /edric/HTML/");
        p("Sub pages: ", other.link(), " and ", input.link());
    }
}
