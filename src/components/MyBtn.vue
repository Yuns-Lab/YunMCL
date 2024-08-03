<template>
    <button class="my-btn">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    button.my-btn {
        @apply bg-[var(--cbg)] pt-[0.3rem] pb-[0.3rem] pl-[1.2rem] pr-[1.2rem] text-[1.2em];
        @apply border-2 border-solid border-[#0008] rounded-[0.5rem];
        @apply transition-all duration-200;
        @apply block;
        &:hover {
            @apply border-[#000];
            scale: 1.02;
        }
        &:active {
            scale: 0.98;
        }
    }
</style>
