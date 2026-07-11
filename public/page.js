import app, { el, div, p, h1, h2, a } from "/app.js";

h1("Hello World");

p("The new Cloudflare URL: ", a("lew42/monorepo").href("https://monorepo.lew42.workers.dev"));

h2("Git Branch Names");
p("Use `<yourname>/<branch-name>` for git branches, for example, `michael/new-page`.  Always `git switch main` and `git pull` to make sure you're up to date.  Then `git switch -c michael/my-page` to make a new branch.  These will be short-lived branches, just to get the code merged, and then you repeat (switch to main, new branch, etc).")
p("You can delete old branches via `git branch -D <branch-name>`, which would be like `git branch -D michael/new-page`, for example.  You would do this if you wanted to reuse the branch name.")
p("The new dev URLs will convert the `/` to `-`, so you'll have: ");
p("`https://<yourname>-<branch>-monorepo.lew42.workers.dev`, like:");
p(a("https://michael-new-page-monorepo.lew42.workers.dev").href("https://michael-new-page-monorepo.lew42.workers.dev"));

p("I know this is all pretty confusing, but I think it'll work.")

h2("Next Task");

p("Create your `/<name>/` pages (`/<name>/page.js`), this time, we'll merge them all into `main`.")

p("Check out ", a("path-1").href("/path-1/"), " and ", a("path-2").href("/path-2/"), ".  We need to think about pages, importing pages, sub pages, page previews, and navigation.  Try to use these patterns to create your own sub pages or page previews.  I'm out of time, this'll have to do for now, good luck!");

p("Push your `<name>/new-page` branch, or whatever you called it, and it should auto deploy.  Send me the link, same as usual!  Thanks!!");
