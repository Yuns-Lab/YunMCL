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
            d="M8 3C5.79 3 4 4.79 4 7v7c0 1.1.9 2 2 2h3v4c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-4h3c1.1 0 2-.9 2-2V3zm0 2h4v2h2V5h1v4h2V5h1v5H6V7c0-1.1.9-2 2-2m-2 9v-2h12v2z"></path>
    </svg>
</template>
