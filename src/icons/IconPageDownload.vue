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
            d="M5 20h14v-2H5m14-9h-4V3H9v6H5l7 7z"></path>
    </svg>
</template>