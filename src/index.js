import SubmitButton from "./components/SubmitButton.vue"

export default {
    install: (app, options) => {
        app.component("SubmitButton", SubmitButton);
    }
}