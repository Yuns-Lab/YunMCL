<script setup lang="ts">
    import MyVersionImg from "../components/MyVersionImg.vue";
    import MyCard from "../components/MyCard.vue";
    import MyBtn from "../components/MyBtn.vue";

    // Temp
    import MyInpWarning from "../components/MyInpWarning.vue";

    import { appWindow } from "@tauri-apps/api/window";
    const getWindowSize = async () => {
        const size = await appWindow.innerSize();
        console.log(size);
    };
</script>

<template>
    <MyCard
        class="relative"
        fade-u>
        <MyVersionImg
            version="1.21-rc2"
            type="release" />
        <div class="w-full h-full absolute top-0 left-0 p-4 text-white z-[2]">
            <h1
                class="text-[3.3vw]"
                style="line-height: 3.4vw"
                fade-u1>
                测试客户端 - 1.21 Survival
            </h1>
            <h2
                class="text-[1.7vw]"
                style="line-height: 1.7vw"
                fade-u2>
                1.21, Fabric 0.16.0
            </h2>
            <div
                fade-u3
                class="flex justify-center items-center absolute bottom-4 right-4 gap-6 my-hover">
                <button
                    class="w-[9vw] h-[5.3vh] bg-[#FFFFFF7B] text-[1.6vw] rounded-lg">
                    切换实例
                </button>
                <button
                    class="w-[14vw] h-[5.3vh] bg-[#FFFFFF7B] text-[1.6vw] rounded-lg"
                    @click="getWindowSize">
                    启动游戏
                </button>
            </div>
        </div>
    </MyCard>
    <MyCard
        class="mt-4 w-full"
        padding
        fade-u1>
        <div class="flex gap-3 items-center">
            <h1
                class="text-3xl mr-6"
                fade-l2>
                快捷方式
            </h1>
            <MyBtn fade-l3>版本文件夹</MyBtn>
            <MyBtn fade-l4>Mod 文件夹</MyBtn>
            <MyBtn fade-l5>存档文件夹</MyBtn>
        </div>
    </MyCard>
    <MyInpWarning fade-r10 />
</template>

<style lang="scss" scoped>
    div.my-hover {
        button {
            scale: 1;
            transition: all 0.2s ease-in-out;
            transform-origin: 100% 100%;
            border: 1px solid #fff0;
            &:hover {
                scale: 1.05;
                border-color: var(--lbtn-br);
                background-color: var(--lbtn-bg);
            }
        }
    }
</style>
