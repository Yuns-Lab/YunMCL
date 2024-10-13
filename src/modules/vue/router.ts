import { createRouter, createWebHistory } from "vue-router";

import { default as Home } from "@/app/Home/Page.vue";
import { default as Download1 } from "@/app/Download/Page1.vue";
import { default as Download2 } from "@/app/Download/Page2.vue";
import { default as Download3 } from "@/app/Download/Page3.vue";
import { default as Download4 } from "@/app/Download/Page4.vue";
import { default as Download5 } from "@/app/Download/Page5.vue";
import { default as Setting1 } from "@/app/Setting/Page1.vue";
import { default as Setting2 } from "@/app/Setting/Page2.vue";
import { default as Setting3 } from "@/app/Setting/Page3.vue";
import { default as Other1 } from "@/app/Other/Page1.vue";
import { default as Other2 } from "@/app/Other/Page2.vue";
import { default as Other3 } from "@/app/Other/Page3.vue";

// #region Pages: Home
const PagesHome = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
];
// #endregion
// #region Pages: Download
const PagesDownload = [
    {
        path: "/download/1",
        name: "download1",
        component: Download1,
    },
    {
        path: "/download/2",
        name: "download2",
        component: Download2,
    },
    {
        path: "/download/3",
        name: "download3",
        component: Download3,
    },
    {
        path: "/download/4",
        name: "download4",
        component: Download4,
    },
    {
        path: "/download/5",
        name: "download5",
        component: Download5,
    },
];
// #endregion
// #region Pages: Setting
const PagesSetting = [
    {
        path: "/setting/1",
        name: "setting1",
        component: Setting1,
    },
    {
        path: "/setting/2",
        name: "setting2",
        component: Setting2,
    },
    {
        path: "/setting/3",
        name: "setting3",
        component: Setting3,
    },
];
// #endregion
// #region Pages: Other
const PagesOther = [
    {
        path: "/other/1",
        name: "other1",
        component: Other1,
    },
    {
        path: "/other/2",
        name: "other2",
        component: Other2,
    },
    {
        path: "/other/3",
        name: "other3",
        component: Other3,
    },
];
// #endregion

// #region Main Router
export const router = createRouter({
    history: createWebHistory(),
    routes: [...PagesHome, ...PagesDownload, ...PagesSetting, ...PagesOther],
});
