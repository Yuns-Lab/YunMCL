<script setup lang="ts">
    import MyPageleft from "@/components/MyPageleft.vue";
    import MyPageleftBtn from "@/components/MyPageleftBtn.vue";
    import { ref } from "vue";

    const currentPage = ref(Number(localStorage.getItem("X-PageDownlaod-Target")) || 1);
</script>

<template>
    <main class="flex w-full h-full">
        <MyPageleft
            style="width: 12rem"
            vly-fade-u>
            <div
                class="absolute left-2 torch transition-all duration-200 ease-in-out"
                :style="{
                    '--x-torch': `${
                        currentPage < 3 ? 40 * (currentPage - 1) : 40 * (currentPage - 1) + 24
                    }px`,
                }"
                vly-fade-u1>
                <img
                    src="@t/redstone_torch.png"
                    class="w-7 rotate-0"
                    style="--tw-rotate: 28deg" />
            </div>
            <span
                class="text-white text-xs -mb-2"
                vly-fade-u1>
                ▼ 本体下载
            </span>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u2
                :target="1">
                自动下载
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u3
                :target="2">
                手动安装包
            </MyPageleftBtn>
            <span
                class="text-white text-xs -mb-2"
                vly-fade-u3>
                ▼ 资源下载
            </span>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u4
                :target="3">
                Mod
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u5
                :target="4">
                整合包
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u6
                :target="5">
                资源包
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u7
                :target="6">
                光影包
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageDownlaod-Target"
                vly-fade-u8
                :target="7">
                数据包
            </MyPageleftBtn>
        </MyPageleft>
        <div
            class="Pageright"
            v-if="currentPage === 1"
            vly-fade-u></div>
        <div
            class="Pageright"
            v-if="currentPage === 2"
            vly-fade-u></div>
        <div
            class="Pageright"
            v-if="currentPage === 3"
            vly-fade-u></div>
        <div
            class="Pageright"
            v-if="currentPage === 4"
            vly-fade-u></div>
        <div
            class="Pageright"
            v-if="currentPage === 5"
            vly-fade-u></div>
        <div
            class="Pageright"
            v-if="currentPage === 6"
            vly-fade-u></div>
        <div
            class="Pageright"
            v-if="currentPage === 7"
            vly-fade-u></div>
    </main>
</template>

<style lang="scss" scoped>
    .torch {
        top: calc(42px + var(--x-torch));
    }
    div.Pageright {
        @apply w-full h-full;
    }
</style>
