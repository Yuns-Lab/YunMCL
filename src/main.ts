import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./modules/vue/router";

createApp(App).use(router).mount("#app");

// Disable contextmenu
document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
});
// Disable nagivation with Alt + Left/Right
document.addEventListener("keydown", (e) => {
    if (e.altKey && (e.keyCode === 37 || e.keyCode === 39)) {
        e.preventDefault();
    }
});
// Disable refetching page with Ctrl + R / F5 / Ctrl + Shift + R
document.addEventListener("keydown", (e) => {
    if (
        e.ctrlKey &&
        (e.keyCode === 82 ||
            e.keyCode === 116 ||
            (e.keyCode === 186 && e.shiftKey))
    ) {
        e.preventDefault();
    }
});
