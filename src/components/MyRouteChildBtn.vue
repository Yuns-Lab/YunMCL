<script setup lang="ts">
    import { useRoute } from "vue-router";
    import { ref, watch } from "vue";
    import IconCircleRight from "./Icon/IconCircleRight.vue";
    const props = defineProps<{
        route: string;
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
        class="btn w-4/5 h-[4vh] rounded-[4rem] rounded-tl-[1rem] bg-[var(--sbtn-bg)] ml-auto mt-2 relative flex justify-center items-center transition-colors"
        :class="{ this: props.route === route }"
        @click="$router.push(props.route)">
        <span class="text-[1.3rem]">
            <slot></slot>
        </span>
        <IconCircleRight
            class="h-2/3 fill-white absolute right-2.5"
            v-motion-pop-visible
            v-if="props.route === route" />
    </button>
</template>

<style lang="scss" scoped>
    button.this {
        @apply bg-[var(--sbtn-bg-this)];
    }
</style>
