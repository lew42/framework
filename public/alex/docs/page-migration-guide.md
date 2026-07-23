# Page Migration Guide

The framework now has a `class Page` and a pushState router (`app.router`).
Pages that migrate get SPA navigation (no full reload); un-migrated pages
keep working exactly as before (full page load).

## What you get for migrating

- Instant navigation: your page activates without reloading the app, CSS, or socket.
- Your page is cached per path: revisits re-activate the same instance, state preserved.
- `document.title` support, page-level stylesheets, lifecycle hooks.

## The pattern (recommended)

```js
import app, { h2, p, Page } from "/app.js";

export default new class ExamplePage extends Page {
	title = "Example page"; // sets document.title when active

	render() {
		app.$body.ac("theme-1"); // side effects move INTO render()
		h2("Example page");
		p("Content");
	}
}
```

## Migrating from each old style

### 1. Function export — smallest change

```js
// before
export default function () {
	p("Content");
}

// after
export default new class ExamplePage extends Page {
	render() {
		p("Content");
	}
}
```

### 2. Object export (`{ link(), render() }`) — methods move as-is

```js
// before
export default {
	link() { return a.c("page-link", "/example/").href("/example/"); },
	render() { p("..."); }
};

// after
export default new class ExamplePage extends Page {
	link() { return a.c("page-link", "/example/").href("/example/"); }
	render() { p("..."); }
}
```

Parent pages keep working unchanged: `import example from "./page.js"` then
`example.link()` — the default export is still an object with your methods.

### 3. Legacy side-effect page (no default export) — the important one

```js
// before: renders at import time — breaks under the router
h1("Hello World");
p("...");

// after
export default new class HomePage extends Page {
	render() {
		h1("Hello World");
		p("...");
	}
}
```

Why: ES module imports are cached. A legacy page renders only on its *first*
import, so the router can't re-render it on revisit — navigating to a legacy
page falls back to a full page load. Migrating removes that fallback.

## Rules

1. **Inert on import**: no rendering at module top level. Everything inside `render()`.
2. Move side effects (`app.$body.ac("theme-1")`, etc.) into `render()`.
3. `this.stylesheet("/your/styles.css")` inside `render()` for page CSS —
   automatically removed when you leave, re-added when you return.
4. Optional hooks: `on_activate()` / `on_deactivate()` (timers, sockets cleanup).

## Router notes

- Internal links are intercepted automatically. Untouched: external links,
  `target=`, `download`, modifier-clicks, same-page `#hash` links.
- Opt out of interception on a specific link: add a `data-no-router` attribute.
- Programmatic navigation: `app.router.navigate("/path/")` (returns a promise).
- Function and object exports (styles 1 & 2) still work un-migrated — the router
  wraps them in a Page automatically. Migrate anyway for `title`, stylesheets, hooks.
