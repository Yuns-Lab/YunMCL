<script setup lang="ts">
    const props = defineProps<{
        padding?: number;
    }>();
    const dynstyle = {
        "padding-left": `${props.padding}px`,
        "padding-right": `${props.padding}px`,
    };
</script>

<template>
    <button
        class="MyButton"
        :style="dynstyle">
        <slot></slot>
    </button>
</template>

<style lang="scss" scoped>
    button.MyButton {
        @apply inline-flex items-center pl-[30px] pr-[30px] pt-[4px] pb-[4px];
        @apply text-[16px] text-white border-none rounded-[5px] cursor-pointer;
        @apply transition-all duration-200 ease-in-out;
        background-image: url("@a/images/texture/dark_oak_planks.png");
        box-shadow: 0 5px 0 hsl(28, 54%, 13%), 0 10px 20px rgba(0, 0, 0, 0.2),
            5px 5px 2px hsla(28, 54%, 13%, 0.5);
        &:active {
            @apply translate-y-1;
            box-shadow: 0 0 0 hsl(28, 54%, 13%), 0 5px 20px rgba(0, 0, 0, 0.2);
        }
    }
</style>
