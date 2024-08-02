<script setup lang="ts">
    import MyCard from "../../components/MyCard.vue";
    import MyBlurImg from "../../components/MyBlurImg.vue";

    import { useRouter } from "vue-router";
    const $router = useRouter();
</script>

<template>
    <div class="my-grid">
        <legend @click="$router.push('/download/auto')">
            <MyCard
                class="link-card"
                style="grid-area: cauto"
                fade-u>
                <MyBlurImg
                    src="/images/downloads/auto.webp"
                    :blur="6" />
                <div class="my-container">
                    <h1 fade-u1>自动安装</h1>
                    <p fade-u2>
                        通过简单的选择 Minecraft
                        本体与附加组件的版本，等待稍许时间即可完成新版本的创建。
                        <br />
                        [ 适合新手操作 ]
                    </p>
                    <span fade-u3>前往 &gt;&gt;&gt;</span>
                </div>
            </MyCard>
        </legend>
        <legend @click="$router.push('/download/manual')">
            <MyCard
                class="link-card"
                style="grid-area: cmanual"
                fade-u>
                <MyBlurImg
                    src="/images/downloads/manual.webp"
                    :blur="6" />
                <div class="my-container">
                    <h1
                        class="ml-2"
                        fade-u1>
                        手动安装
                    </h1>
                    <p fade-u2>
                        手动下载 Minecraft 本体与附加组件，并按照指示完成安装。
                        <br />
                        [ 适合高阶玩家使用 ]
                    </p>
                    <span fade-u3>前往 &gt;&gt;&gt;</span>
                </div>
            </MyCard>
        </legend>
        <legend @click="$router.push('/download/mod')">
            <MyCard
                class="link-card"
                style="grid-area: cmod"
                fade-u1>
                <MyBlurImg
                    src="/images/downloads/mod.webp"
                    :blur="6" />
                <div class="my-container">
                    <h1
                        class="ml-[0.375rem]"
                        fade-u1>
                        模组
                    </h1>
                    <p fade-u2>
                        使用他人创建的神奇作品丰富你的 Minecraft 游戏体验。
                    </p>
                    <p
                        style="margin-top: 0 !important"
                        fade-u2>
                        [ 目前支持 Modrinth 平台 ]
                    </p>
                    <span fade-u3>前往 &gt;&gt;&gt;</span>
                </div>
            </MyCard>
        </legend>
        <legend @click="$router.push('/download/modpack')">
            <MyCard
                class="link-card"
                style="grid-area: cmodpack"
                fade-u1>
                <MyBlurImg
                    src="/images/downloads/modpack.webp"
                    :blur="8" />
                <div class="my-container">
                    <h1 class="ml-[0.375rem]" fade-u1>整合包</h1>
                    <p fade-u2>
                        安装他人预先制作好的 Minecraft
                        实例，快速进入像素画的开放世界。
                    </p>
                    <p
                        style="margin-top: 0 !important"
                        fade-u2>
                        [ 目前支持 Modrinth 平台 ]
                    </p>
                    <span fade-u3>前往 &gt;&gt;&gt;</span>
                </div>
            </MyCard>
        </legend>
    </div>
</template>

<style lang="scss" scoped>
    div.my-grid {
        @apply w-full h-full grid grid-cols-2 grid-rows-2 gap-6 p-2;
        grid-template-areas: "cauto cmanual" "cmod cmodpack";
    }
    legend {
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
    .link-card {
        @apply relative w-full h-full;
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
