<script setup lang="ts">
    const props = defineProps<{
        title: string;
        desp: string;
    }>();
</script>

<template>
    <button class="ly-my-item">
        <slot name="img"></slot>
        <div class="flex flex-col items-start">
            <span class="text-lg leading-[22px]">{{ props.title }}</span>
            <span class="opacity-70 leading-[18px]">{{ props.desp }}</span>
        </div>
    </button>
</template>

<style lang="scss" scoped>
    button.ly-my-item {
        @apply flex items-center gap-2 transition-all duration-100 ease-in-out;
        @apply w-full pt-1 pb-1 pl-2 pr-2 rounded-md border-[1px] border-[#FFFFFF00];
        @apply hover:bg-gray-200 hover:border-gray-300;
        @apply active:scale-[97%];
    }
</style>
