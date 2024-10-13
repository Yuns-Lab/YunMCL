<script setup lang="ts">
    const props = defineProps<{
        height: string;
    }>();
</script>

<template>
    <div
        class="yun-scroll"
        :style="{ height: props.height }">
        <slot></slot>
    </div>
</template>

<style lang="scss" scoped>
    div.yun-scroll {
        overflow-y: scroll;
    }
</style>
