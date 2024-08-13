<script setup lang="ts">
    import { nextTick, onMounted, ref } from "vue";

    const props = defineProps<{
        title?: string;
        canSwap?: boolean;
        isSwap?: boolean;
    }>();

    const canSwap = ref(props.canSwap);
    const isSwap = ref(props.canSwap ? props.isSwap : false);

    const mc = ref<HTMLDivElement>();
    const mc_main = ref<HTMLDivElement>();
    onMounted(() => {
        const card = mc.value;
        if (card) {
            const height = card.clientHeight;
            card.style.setProperty("--x-height", `${height}px`);
        }
        const main = mc_main.value;
        if (main) {
            const height = main.clientHeight;
            main.style.setProperty("--x-height", `${height - 36 - 8}px`);
            nextTick(() => {
                if (canSwap.value && isSwap.value) {
                    main.classList.add("swap");
                } else {
                    main.classList.remove("swap");
                }
            });
        }
    });

    function toggleSwap() {
        if (canSwap.value) {
            mc.value?.classList.toggle("swap");
            mc_main.value?.classList.toggle("swap");
        }
    }
</script>

<template>
    <div
        class="MyCard"
        ref="mc">
        <div
            class="before"
            @click="toggleSwap()">
            {{ props.title }}
        </div>
        <div class="after"></div>
        <main ref="mc_main">
            <slot></slot>
        </main>
    </div>
</template>

<style lang="scss" scoped>
    div.MyCard {
        @apply relative py-6;
        @apply transition-all duration-200 ease-in-out;
        height: var(--x-height);
        &.swap {
            height: 32px;
            main {
                padding: 0 2.25rem;
                height: 0;
                overflow: hidden;
            }
        }
        div.before {
            @apply absolute top-0 left-0 w-full h-6 flex items-center pl-2 text-white;
            background-image: url("@t/stripped_dark_oak_log-col.png");
            background-size: contain;
        }
        div.after {
            content: "";
            @apply absolute bottom-0 left-0 w-full h-6;
            background-image: url("@t/stripped_dark_oak_log-col.png");
            background-size: contain;
        }
        main {
            @apply relative px-9 py-1 w-full;
            height: var(--x-height);
            &::before {
                content: "";
                @apply absolute top-0 left-0 w-6 h-full;
                background-image: url("@t/stripped_dark_oak_log.png");
                background-size: contain;
            }
            &::after {
                content: "";
                @apply absolute top-0 right-0 w-6 h-full;
                background-image: url("@t/stripped_dark_oak_log.png");
                background-size: contain;
            }
        }
    }
</style>
