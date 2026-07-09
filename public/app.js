import App from "./framework/core/App/App.js";

App.stylesheet("styles.css");

const app = window.app = new App();

export default app;
export { app };
export * from "./framework/core/App/App.js";