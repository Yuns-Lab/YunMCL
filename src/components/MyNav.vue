<script setup lang="ts">
    import { reactive } from "vue";
    import { appWindow } from "@tauri-apps/api/window";
    const globals = reactive({
        minimizeButton: "#00B32A",
        maximizeButton: "#FE7D00",
        closeButton: "#F43F3F",
        isMaximize: false,
    });
    appWindow.listen("tauri://focus", () => {
        globals.minimizeButton = "#00B32A";
        globals.maximizeButton = "#FE7D00";
        globals.closeButton = "#F43F3F";
    });
    appWindow.listen("tauri://blur", () => {
        globals.minimizeButton = "#808080";
        globals.maximizeButton = "#808080";
        globals.closeButton = "#808080";
    });
    const $appWindow = appWindow;
    async function handleMaximize() {
        const isMaximize = await $appWindow.isMaximized();
        globals.isMaximize = !isMaximize;
        if (isMaximize) {
            $appWindow.unmaximize();
        } else {
            $appWindow.maximize();
        }
    }
    // --- //
    import IconClose from "./Icon/IconClose.vue";
    import iconMinus from "./Icon/IconMinus.vue";
    import IconSqOnSq from "./Icon/IconSqOnSq.vue";
    import IconSquare from "./Icon/IconSquare.vue";
</script>

<template>
    <nav
        class="w-full h-[42px] bg-[var(--nav-bg)] relative flex justify-center items-center"
        data-tauri-drag-region>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="182.53997802734375"
            height="26.64000129699707"
            viewBox="0 0 182.53997802734375 26.64000129699707"
            v-motion-pop-visible>
            <path
                d="M0 0.72L8.28 0.72L11.988 6.408L15.66 0.72L23.94 0.72L15.516 13.716L15.516 19.548L8.604 25.92L8.604 13.896L0 0.72ZM55.948 0.72L55.948 14.508C55.948 17.532 54.886 19.8 54.886 19.8C53.824 22.068 52.078 23.598 52.078 23.598C50.332 25.128 48.118 25.884 48.118 25.884C45.904 26.64 43.564 26.64 43.564 26.64C41.26 26.64 39.028 25.884 39.028 25.884C36.796 25.128 35.05 23.598 35.05 23.598C33.304 22.068 32.242 19.8 32.242 19.8C31.18 17.532 31.18 14.508 31.18 14.508L31.18 0.72L38.092 0.72L38.092 14.04C38.092 15.696 38.56 16.92 38.56 16.92C39.028 18.144 39.802 18.972 39.802 18.972C40.576 19.8 41.566 20.214 41.566 20.214C42.556 20.628 43.564 20.628 43.564 20.628C44.608 20.628 45.58 20.214 45.58 20.214C46.552 19.8 47.326 18.972 47.326 18.972C48.1 18.144 48.568 16.92 48.568 16.92C49.036 15.696 49.036 14.04 49.036 14.04L49.036 7.164L55.948 0.72ZM70.856 0.72L81.728 15.624L81.728 7.2L88.676 0.72L88.676 25.92L81.764 25.92L81.764 25.848L70.856 10.908L70.856 25.92L63.908 25.92L63.908 0.72L70.856 0.72ZM96.636 22.536L96.636 0.72L104.952 0.72L110.64 11.088L116.292 0.72L124.572 0.72L124.572 25.92L117.66 25.92L117.66 10.908L110.604 23.652L103.584 10.908L103.584 16.164L96.636 22.536ZM149.812 7.884C148.948 6.984 147.76 6.498 147.76 6.498C146.572 6.012 145.06 6.012 145.06 6.012C143.512 6.012 142.306 6.534 142.306 6.534C141.1 7.056 140.272 8.028 140.272 8.028C139.444 9 139.012 10.35 139.012 10.35C138.58 11.7 138.58 13.32 138.58 13.32C138.58 16.632 140.272 18.63 140.272 18.63C141.964 20.628 145.06 20.628 145.06 20.628C146.68 20.628 147.94 20.07 147.94 20.07C149.2 19.512 150.028 18.504 150.028 18.504L154.312 23.436C152.584 24.984 150.244 25.812 150.244 25.812C147.904 26.64 145.096 26.64 145.096 26.64C142.108 26.64 139.66 25.686 139.66 25.686C137.212 24.732 135.466 22.968 135.466 22.968C133.72 21.204 132.766 18.756 132.766 18.756C131.812 16.308 131.812 13.284 131.812 13.284C131.812 10.296 132.766 7.848 132.766 7.848C133.72 5.4 135.466 3.654 135.466 3.654C137.212 1.908 139.678 0.954 139.678 0.954C142.144 0 145.132 0 145.132 0C148.048 0 150.46 0.9 150.46 0.9C152.872 1.8 154.636 3.492 154.636 3.492L149.812 7.884ZM168.14 0.72L168.14 19.908L182.54 19.908L182.54 25.92L161.192 25.92L161.192 7.164L168.14 0.72ZM161.156 7.2L161.192 7.164L161.156 7.2Z"
                fill-rule="evenodd"
                fill="#FFFFFF"></path>
        </svg>
        <div class="flex gap-6 items-center absolute right-4">
            <button
                class="window-btn group"
                :class="`bg-[${globals.minimizeButton}]`"
                v-motion-pop-visible
                @click="$appWindow.minimize()">
                <iconMinus class="window-btn-icon" />
            </button>
            <button
                class="window-btn group"
                :class="`bg-[${globals.maximizeButton}]`"
                v-motion-pop-visible
                @click="handleMaximize()">
                <IconSqOnSq
                    v-if="globals.isMaximize"
                    class="window-btn-icon" />
                <IconSquare
                    v-else
                    class="window-btn-icon w14" />
            </button>
            <button
                class="window-btn group"
                :class="`bg-[${globals.closeButton}]`"
                v-motion-pop-visible
                @click="$appWindow.close()">
                <IconClose class="window-btn-icon" />
            </button>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    button.window-btn {
        @apply w-5 h-5 rounded-full flex justify-center items-center;
    }
    .window-btn-icon {
        @apply w-4 invisible group-hover:visible;
        &.w14 {
            @apply w-[14px];
        }
    }

    .bg-\[\#00B32A\] {
        background-color: #00b32a;
    }
    .bg-\[\#FE7D00\] {
        background-color: #fe7d00;
    }
    .bg-\[\#F43F3F\] {
        background-color: #f43f3f;
    }
    .bg-\[\#808080\] {
        background-color: #808080;
    }
</style>
