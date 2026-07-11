import { p, a, span } from '/app.js';
import leaves from './leaves/page.js';
import trunk from '../page.js';

export default {
  link() {
    return a.c("page-link", "branches").href("/castin/root/trunk/branches/")
  },
  render() {
    p("Reaching wider, I learn to let go and stretch out for the ", leaves.link());
    p("Let's go back to the ", trunk.link());
  }
}
