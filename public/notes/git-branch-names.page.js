import app, { el, div, p, h1, h2, a, code, span } from "/app.js";

app.$body.ac("theme-1");

export default {
    link(){
        return a("Git Branch Names").href("/notes/git-branch-names");
    },
    render(){
        a("Home").href("/"); span(" "); a("Notes").href("/notes/");

        h2("Git Branch Names");

        p("Use `<yourname>/<branch-name>` for git branches, for example, `michael/new-page`.  Always `git switch main` and `git pull` to make sure you're up to date.  Then `git switch -c michael/new-page` to make a new branch.  These will be short-lived branches, just to get the code merged, and then you repeat (switch to main, new branch, etc).")
        p("You can delete old branches via `git branch -D <branch-name>`, which would be like `git branch -D michael/new-page`, for example.  You would do this if you wanted to reuse the branch name.")
        p("The new dev URLs will convert the `/` to `-`, so you'll have: ");
        p("`https://<yourname>-<branch>-monorepo.lew42.workers.dev`, like:");
        p(a("https://michael-new-page-monorepo.lew42.workers.dev").href("https://michael-new-page-monorepo.lew42.workers.dev"));
        
        p("I know this is all pretty confusing, but I think it'll work.  Basically:");
        
        el("ul", () => {
            el("li", code("michael/new-page"), " for ", el("strong", "git branch names"));
            el("li", code("michael-new-page-monorepo.lew42.workers.dev"), " for ", el("strong", "Cloudflare previews"));
        });
        
        p("In case you're wondering, why `<name>/<branch>`?  It's because GitHub will group branches by `/`, so if you push several branches, it'll group them.  Maybe not worth the confusion, but we're going to give it a shot.")
        
        p("Before, I was thinking you'd each have a dedicated `<name>` branch, and a permanent `<name>-monorepo.lew42.workers.dev` preview site.  And that could work, but long-lived branches are way more susceptible to merge conflicts.  This way, each branch is temporary, and we start fresh after `git switch main` and `git pull`.")

    }
};