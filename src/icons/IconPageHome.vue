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
            d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z"></path>
    </svg>
</template>
