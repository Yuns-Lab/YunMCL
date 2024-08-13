<script setup lang="ts">
    import { useRoute, useRouter } from "vue-router";
    const props = defineProps<{
        route: string;
    }>();
    const $route = useRoute();
    const $router = useRouter();
</script>

<template>
    <button
        class="MyRouteButton"
        :class="{ this: $route.path === props.route }"
        @click="$router.push(props.route)">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    button.MyRouteButton {
        @apply inline-flex items-center pl-[30px] pr-[28px] mb-[5px] mr-5;
        @apply text-[16px] text-white tracking-[2px] border-none rounded-[5px] cursor-pointer;
        @apply transition-all duration-200 ease-in-out;
        height: calc(80%);
        background-image: url("@a/images/texture/dark_oak_planks.png");
        box-shadow: 0 5px 0 hsl(28, 54%, 13%), 0 10px 20px rgba(0, 0, 0, 0.2),
            5px 5px 2px hsla(28, 54%, 13%, 0.5);
        &:active,
        &.this {
            @apply pb-[3px];
            transform: translateY(0.25rem) !important;
            box-shadow: 0 0 0 hsl(28, 54%, 13%), 0 5px 20px rgba(0, 0, 0, 0.2);
        }
    }
</style>
