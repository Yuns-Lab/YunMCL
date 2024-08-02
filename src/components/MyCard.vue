<script setup lang="ts">
    const props = defineProps<{
        padding?: boolean;
    }>();
</script>

<template>
    <div
        class="rounded-[0.75rem] overflow-hidden bg-[var(--cbg)] ly-my-card"
        :class="{ 'pt-3 pb-3 pl-4 pr-4': props.padding }">
        <slot></slot>
    </div>
</template>
