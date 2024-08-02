<script setup lang="ts">
    import { useRoute } from "vue-router";
    import { ref, watch } from "vue";
    import IconCircleRight from "./Icon/IconCircleRight.vue";
    const props = defineProps<{
        route: string;
        haschild?: boolean;
    }>();
    const $route = useRoute();
    const route = ref($route.path);
    watch(
        () => $route.path,
        (newVal) => {
            route.value = newVal;
        }
    );
</script>

<template>
    <button
        class="btn w-full h-[5vh] rounded-[4rem] rounded-bl-[1rem] bg-[var(--sbtn-bg)] mt-4 relative flex justify-center items-center transition-colors"
        :class="{ this: props.route === route }"
        @click="$router.push(props.route)">
        <span class="text-[2rem]">
            <slot></slot>
        </span>
        <IconCircleRight
            class="h-2/3 fill-white absolute right-2.5"
            :class="{ 'my-rotate': props.haschild }"
            v-motion-pop-visible
            v-if="props.route === route" />
    </button>
</template>

<style lang="scss" scoped>
    button.this {
        @apply bg-[var(--sbtn-bg-this)];
    }
    .my-rotate {
        transform: rotate(0deg);
        animation: rotate-90-r 0.5s both;
    }
</style>
