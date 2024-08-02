<script setup lang="tsx">
    import MyCard from "../../components/MyCard.vue";
    import MyBlurImg from "../../components/MyBlurImg.vue";
</script>

<template>
    <legend>
        <MyCard class="relative">
            <MyBlurImg
                src="/images/settings/minecraft.webp"
                :blur="6" />
            <div class="my-container">
                <h1 class="ml-[0.375rem]">游戏设置</h1>
                <p>配置有关游戏启动的内容。</p>
                <span>前往 &gt;&gt;&gt;</span>
            </div>
        </MyCard>
    </legend>
    <br />
    <legend>
        <MyCard class="relative">
            <MyBlurImg
                src="/images/settings/customize.webp"
                :blur="6" />
            <div class="my-container">
                <h1 class="ml-[0.375rem]">个性化设置</h1>
                <p>自由调整启动器的样式，完美契合你心中所想。</p>
                <span>前往 &gt;&gt;&gt;</span>
            </div>
        </MyCard>
    </legend>
    <br />
    <legend>
        <MyCard class="relative">
            <MyBlurImg
                src="/images/settings/launcher.webp"
                :blur="6" />
            <div class="my-container">
                <h1 class="ml-[0.375rem]">启动器设置</h1>
                <p>配置启动器的核心内容。</p>
                <span>前往 &gt;&gt;&gt;</span>
            </div>
        </MyCard>
    </legend>
</template>

<style lang="scss" scoped>
    legend {
        @apply pl-4 pr-4;
        transition: transform 0.2s ease-in-out;
        transform: scale(1);
        &:has(div.my-container:hover) {
            transform: scale(1.02);
        }
        &:has(div.my-container:active) {
            transition: transform 0.1s ease-in-out;
            transform: scale(0.98);
        }
    }
    div.ly-my-card {
        @apply h-[12.5rem];
    }
    div.my-container {
        @apply absolute w-full h-full top-0 left-0 pt-4 pb-4 pl-3 pr-3 z-[2] text-white cursor-pointer;
        h1 {
            @apply text-5xl font-[550];
        }
        p {
            @apply mt-2 ml-4 mr-4 mb-0 text-2xl font-[350];
        }
        span {
            @apply absolute bottom-8 right-8 z-[2] text-3xl border-b-2;
        }
    }
</style>
