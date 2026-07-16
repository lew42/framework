import app, { p, a, fieldset, legend, input, button, article, footer, div, append, pre, code } from "/app.js";

app.$body.ac("theme-1");

export default {

    link(){
        return a.c("page-link", "input").href("/edric/HTML/input/");
    },

    render(){
        a.c("page-back", "Back").href("../");
        p("This is the rest of the content for input");

        article(() => {
            fieldset(() => {
                legend("Action buttons");
                p(() => {
                    input().attr("type", "submit").attr("value", "<input type=submit>");
                    append(" ");
                    input().attr("type", "button").attr("value", "<input type=button>");
                    append(" ");
                    input().attr("type", "reset").attr("value", "<input type=reset>");
                    append(" ");
                    input().attr("type", "submit").attr("value", "<input disabled>").attr("disabled", "");
                });
                p(() => {
                    button("<button type=submit>").attr("type", "submit");
                    append(" ");
                    button("<button type=button>").attr("type", "button");
                    append(" ");
                    button("<button type=reset>").attr("type", "reset");
                    append(" ");
                    button("<button disabled>").attr("type", "button").attr("disabled", "");
                });
                p(() => {
                    a("a.button").ac("button").href("#");
                    append(" ");
                    a("a.button.primary").ac("button primary").href("#");
                    append(" ");
                    a("a.button.secondary").ac("button secondary").href("#");
                    append(" ");
                    a("a.button.dark").ac("button dark").href("#");
                    append(" ");
                    a("a.button.error").ac("button error").href("#");
                    append(" ");
                    a("a.button.success").ac("button success").href("#");
                });
                p(() => {
                    a("a.button.outline").ac("button outline").href("#");
                    append(" ");
                    a("a.button.outline.primary").ac("button outline primary").href("#");
                    append(" ");
                    a("a.button.outline.secondary").ac("button outline secondary").href("#");
                    append(" ");
                    a("a.button.outline.dark").ac("button outline dark").href("#");
                    append(" ");
                    a("a.button.clear").ac("button clear").href("#");
                });
            });
        });

        //Article for Action Inputs
        article(() => {
            fieldset(() => {
                legend("Action inputs");
                div.c("grid gap", () => {
                    div.c("flex v gap", () => {
                        input().attr("type", "submit").attr("value", "<input type=submit>");
                        p("`<input type=\"submit\">` submits the parent form.");
                    });

                    div.c("flex v gap", () => {
                        input().attr("type", "button").attr("value", "<input type=button>");
                        p("`<input type=\"button\">` does nothing on its own; needs a JS click handler.");
                    });

                    div.c("flex v gap", () => {
                        input().attr("type", "reset").attr("value", "<input type=reset>");
                        p("`<input type=\"reset\">` resets the form back to its default values.");
                    });

                    div.c("flex v gap", () => {
                        input().attr("type", "submit").attr("value", "<input disabled>").attr("disabled", "");
                        p("`<input type=\"submit\" disabled>` submits, but is unclickable and excluded from submission.");
                    });
                }).style({ "grid-template-columns": "repeat(2, 1fr)", "margin-bottom": "4em" });

                div.c("flex v", () => {
                    p("Example on how to use it");

                    pre(`import app, { input, p, append } from "/app.js";

p(() => {
	input().attr("type", "submit").attr("value", "<input type=submit>");
	append(" ");
	input().attr("type", "button").attr("value", "<input type=button>");
	append(" ");
	input().attr("type", "reset").attr("value", "<input type=reset>");
	append(" ");
	input().attr("type", "submit").attr("value", "<input disabled>").attr("disabled", "");
});`).style({ "font-size": "0.9em", "margin-top": "0" });
                }).style({
                    border: "1px solid var(--subtle)",
                    "border-radius": "0.3em",
                    padding: "1em",
                    "margin-bottom": "2em"
                });

                div.c("flex v gap", () => {
                    p("Placeholder");

                    input().attr("placeholder", "Type here...");
                    p("`input().attr(\"placeholder\", \"Type here...\")` — shows greyed-out hint text inside an empty input. It disappears once the user types, and is never submitted as a value (unlike `.attr(\"value\", ...)`).");
                }).style({
                    border: "1px solid var(--subtle)",
                    "border-radius": "0.3em",
                    padding: "1em"
                });
            });
        }).style("margin-bottom", "4em");

        //Article for Action Buttons
        article(() => {
            fieldset(() => {
                legend("Action buttons");
                p(() => {
                    button("<button type=submit>").attr("type", "submit");
                    p("`<button type=\"submit\">` — submits the parent form.").style("margin-bottom", "2em");
                    append(" ");

                    button("<button type=button>").attr("type", "button");
                    p("`<button type=\"button\">` — does nothing on its own; needs a JS click handler.").style("margin-bottom", "2em");
                    append(" ");

                    button("<button type=reset>").attr("type", "reset");
                    p("`<button type=\"reset\">` — resets the form back to its default values.").style("margin-bottom", "2em");
                    append(" ");

                    button("<button disabled>").attr("type", "button").attr("disabled", "");
                    p("`<button disabled>` — unclickable, excluded from form submission.").style("margin-bottom", "2em");
                });
            });
        });
    }
}