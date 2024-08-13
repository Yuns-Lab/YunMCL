<script setup lang="ts">
    import { RouterView } from "vue-router";
    import { exit } from "@tauri-apps/api/process";
    // === //
    import { default as Manifest } from "./app/manifest.json";
    import MyButton from "@c/MyButton.vue";
    import MyRouteButton from "@c/MyRouteButton.vue";
    import YunMCL from "@a/YunMCL.vue";
    async function close() {
        await exit();
    }
</script>

<template>
    <div class="container">
        <div class="h1"></div>
        <div class="h2"></div>
        <div
            class="w1"
            data-tauri-drag-region>
            <YunMCL
                data-tauri-drag-region
                v-motion-pop-visible />
            <MyRouteButton
                vly-fade-l
                route="/">
                主页
            </MyRouteButton>
            <MyRouteButton
                vly-fade-l
                route="/download">
                下载
            </MyRouteButton>
            <MyRouteButton
                vly-fade-l
                route="/settings">
                设置
            </MyRouteButton>
            <MyRouteButton
                vly-fade-l
                route="/utils">
                更多
            </MyRouteButton>
        </div>
        <div class="w2 flex justify-end items-end">
            <span class="mb-1/3 mr-1 text-sm">
                YunMCL - {{ Manifest.app_channel }} Channel -
                {{ Manifest.app_version }}
            </span>
        </div>
        <div class="lt">
            <img
                src="/YunMCL.png"
                v-motion-pop-visible
                data-tauri-drag-region />
        </div>
        <div class="rt">
            <MyButton
                :padding="8"
                class="w-full"
                @click="close()">
                <svg
                    viewBox="0 0 1024 1024"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    p-id="3387"
                    class="w-8 h-8">
                    <path
                        d="M556.8 512L832 236.8c12.8-12.8 12.8-32 0-44.8-12.8-12.8-32-12.8-44.8 0L512 467.2l-275.2-277.333333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l275.2 277.333333-277.333333 275.2c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L512 556.8 787.2 832c6.4 6.4 14.933333 8.533333 23.466667 8.533333s17.066667-2.133333 23.466666-8.533333c12.8-12.8 12.8-32 0-44.8L556.8 512z"
                        fill="#d81e06"></path>
                </svg>
            </MyButton>
        </div>
        <div class="main">
            <RouterView />
        </div>
    </div>
</template>

<style lang="scss" scoped>
    // Layout
    .container {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-columns: 16px 48px 1fr 48px 16px;
        grid-template-rows: 16px 48px 1fr 48px 16px;
        gap: 0px 0px;
        grid-auto-flow: row;
    }
    .w1 {
        @apply pl-[70px] flex items-center overflow-hidden;
        grid-area: 2 / 1 / 3 / 6;
    }
    .w2 {
        grid-area: 4 / 1 / 5 / 6;
    }
    .h1 {
        grid-area: 1 / 2 / 6 / 3;
    }
    .h2 {
        grid-area: 1 / 4 / 6 / 5;
    }
    .lt {
        grid-area: 2 / 2 / 2 / 2;
    }
    .rt {
        grid-area: 2 / 4 / 2 / 4;
    }
    // Main
    .w1,
    .w2 {
        background-image: url("@t/border.png");
    }
    .h1,
    .h2 {
        background-image: url("@t/border-col.png");
    }
    .main {
        grid-area: 3 / 3 / 4 / 4;
        background-image: url("@t/spruce_planks.png");
    }
</style>
