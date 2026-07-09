# Lew42.com Framework Site

`npm install` and then `node server.js`

- Maintain static compatibility (server is just for local dev)
- No bundler or build (pure static hosting)
- Native ESM `imports`
- Simple `div()` view system with capturing

## Cloudflare Previews

The current `main` branch is deployed at: https://framework.lew42.workers.dev/

My team has been invited to this repo as Collaborators.  If you accept, you should be able to:

1. Clone this repo (no need to fork).
2. You cannot push to main.
3. Make a branch (`git switch -c <branch-name>`), use your name.
4. Make a change, and `git push`.
5. You should have push privilege, so it should work.
6. Cloudflare will automatically build your branch, and host at <yourname>-framework.lew42.workers.dev

For example, my branch is: https://michael-framework.lew42.workers.dev/ (notice the `-`, it's not a `.`)

## Load Order (tracing each browser request through the app.js -> page.js)

1. All paths fallback to the root `/index.html` (standard SPA fallback)
2. `index.html` loads `app.js`
3. `app.js` `imports App` and creates `new App()`
4. The `app` then loads the proper `/path/page.js`
5. The `app` `awaits` the `page.js` module to finish, and then `injects()` it into the dom, only after all stylesheets have loaded.

This should prevent any flash of unstyled content.
