import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

const sassOptions = {
    quietDeps: true,
};

// https://vitejs.dev/config/
export default defineConfig(async () => ({
    css: {
        preprocessorOptions: {
            sass: sassOptions,
            scss: sassOptions,
        }
    },
    plugins: [vue()],
    clearScreen: false,
    resolve: {
        alias: {
            "@": "/src",
            "@a": "/src/assets",
            "@c": "/src/components",
            "@m": "/src/modules",
            "@i": "/src/icons",
        },
    },
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            ignored: ["**/src-tauri/**"],
        },
    },
}));
