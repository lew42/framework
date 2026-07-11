import { p, a } from '/app.js';
import trunk from './trunk/page.js';
import home from '../page.js';

export default {
  link() {
    return a.c("page-link", "root").href("/castin/root/")
  },
  render() {
    p("Deep in the dark, unseen, I hold on to the ", trunk.link());
    p("Let's go back ", home.link());
  }
}
