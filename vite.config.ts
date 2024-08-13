import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(async () => ({
    plugins: [vue()],
    clearScreen: false,
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            ignored: ["**/src-tauri/**"],
        },
    },
    resolve: {
        alias: {
            "@": "/src",
            "@p": "/src/app",
            "@a": "/src/assets",
            "@t": "/src/assets/images/texture",
            "@c": "/src/components",
            "@m": "/src/modules",
        },
    },
}));
