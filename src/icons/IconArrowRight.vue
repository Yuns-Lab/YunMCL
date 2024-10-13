<script lang="ts" setup>
    const props = defineProps<{
        color?: string;
        size: string | number;
    }>();
</script>

<template>
    <svg
        xmlns="http://www.w3.org/2000/svg"
        :width="props.size"
        :height="props.size"
        viewBox="0 0 24 24">
        <path
            :fill="props.color || 'currentColor'"
            d="M8.59 16.58L13.17 12L8.59 7.41L10 6l6 6l-6 6z"></path>
    </svg>
</template>

<style lang="scss" scoped>
    svg {
        transform: translateY(0.5px);
    }
</style>
