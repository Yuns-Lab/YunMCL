<script setup lang="ts">
    import MyNav from "./components/MyNav.vue";
    import MyAside from "./components/MyAside.vue";
    import { RouterView } from "vue-router";
</script>

<template>
    <div class="w-full h-full rounded-[8px] overflow-hidden">
        <MyNav />
        <div class="w-full h-full my-grid">
            <MyAside
                class="bg-[var(--main-bg)]"
                style="grid-area: aside" />
            <div
                class="router relative"
                style="grid-area: main">
                <Suspense>
                    <RouterView />
                </Suspense>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    div.my-grid {
        display: grid;
        grid-template-columns: 2fr 8fr;
        grid-template-rows: 1fr;
        grid-template-areas: "aside main";
    }
    div.router {
        @apply bg-[var(--main-bg2)] p-4;
        height: calc(100vh - 42px);
    }
</style>
