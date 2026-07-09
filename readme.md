# Lew42.com Framework Site

`npm install` and then `node server.js`

- Static compatible (server is for local dev)
- No bundler or build (pure static hosting)
- Native ESM `imports`
- Simple `div()` view system with capturing

## Load Order

1. All paths fallback to the root `/index.html` (standard SPA fallback)
2. `index.html` loads `app.js`
3. `app.js` `imports App` and creates `new App()`
4. The `app` then loads the proper `/path/page.js`
5. The `app` `awaits` the `page.js` module to finish, and then `injects()` it into the dom, only after all stylesheets have loaded.

This should prevent any flash of unstyled content.