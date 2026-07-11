import { p, a } from '/app.js';
import root from './root/page.js';

export default {
  link() {
    return a.c("page-link", "home").href("/castin/")
  },
  render() {
    p("Come closer. Every tree keeps its oldest secret at the ", root.link());
  }
}
