import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App);

//#region 插件
import { MotionPlugin } from "@vueuse/motion";
app.use(MotionPlugin);

import router from "./router";
app.use(router);
//#endregion

app.mount("#app");

//#region 样式
import "./assets/styles/main.scss";
import "./assets/styles/tw.css";
//#endregion
