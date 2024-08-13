<script setup lang="ts"></script>

<template>
    <div class="MyPageleft">
        <i class="right"></i>
        <i class="bottom"></i>
        <i class="left"></i>
        <i class="top"></i>
        <div class="container">
            <slot></slot>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    div.MyPageleft {
        @apply relative p-6 pl-8 h-full w-[15%];
        i.top {
            content: "";
            @apply absolute top-0 left-0 bottom-0 h-4;
            width: calc(100% - 16px);
            background-image: url("@t/stripped_dark_oak_log-col.png");
        }
        i.bottom {
            content: "";
            @apply absolute bottom-0 right-0 w-full h-4;
            background-image: url("@t/stripped_dark_oak_log-col.png");
        }
        i.left {
            content: "";
            @apply absolute top-0 left-0 bottom-0 w-4;
            background-image: url("@t/stripped_dark_oak_log.png");
        }
        i.right {
            content: "";
            @apply absolute top-0 right-0 bottom-0 w-4;
            background-image: url("@t/stripped_dark_oak_log.png");
        }
        div.container {
            @apply flex flex-col gap-4;
        }
    }
</style>
