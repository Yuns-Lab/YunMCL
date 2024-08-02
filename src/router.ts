import { createRouter, createWebHistory } from "vue-router";

const pages = import.meta.glob(`./app/**/page.ts`, {
    eager: true,
    import: "default",
});
const pageComps = import.meta.glob("./app/**/index.vue");

const routes = Object.entries(pages).map(([path, meta]) => {
    let pageJSPath = path;
    path = path.replace("./app", "").replace("/page.ts", "");
    path = path || "/";
    const name = path.split("/").filter(Boolean).join("-") || "index";
    const compPath = pageJSPath.replace("page.ts", "index.vue");
    return {
        path,
        name,
        component: pageComps[compPath],
        meta,
    };
});

export default createRouter({
    history: createWebHistory(),
    // @ts-ignore
    routes,
});
