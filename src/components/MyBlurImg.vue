<script setup lang="ts">
    const props = defineProps<{
        src: string;
        blur?: number;
    }>();
</script>

<template>
    <div class="hover"></div>
    <img
        :src="props.src"
        :style="{ filter: `blur(${props.blur || 0}px)` }" />
</template>

<style lang="scss" scoped>
    div.hover {
        @apply w-full h-full bg-black absolute opacity-35 z-[1];
    }
    img {
        @apply w-full h-full object-cover;
    }
</style>
