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
            d="M4 20v-2h16v2H4Z" />
    </svg>
</template>

<style lang="scss" scoped>
    svg {
        transform: translateY(-5px);
    }
</style>
