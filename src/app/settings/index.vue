<script setup lang="ts">
    import MyCard from "@/components/MyCard.vue";
    import MyPageleft from "@/components/MyPageleft.vue";
    import MyPageleftBtn from "@/components/MyPageleftBtn.vue";
    import { ref } from "vue";

    const currentPage = ref(Number(localStorage.getItem("X-PageSetting-Target")) || 1);
</script>

<template>
    <main class="flex w-full h-full">
        <MyPageleft
            style="width: 12rem"
            vly-fade-u>
            <div
                class="absolute left-2 torch transition-all duration-200 ease-in-out"
                :style="{
                    '--x-torch': `${40 * (currentPage - 1)}px`,
                }"
                vly-fade-u1>
                <img
                    src="@t/redstone_torch.png"
                    class="w-7 rotate-0"
                    style="--tw-rotate: 28deg" />
            </div>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageSetting-Target"
                vly-fade-u1
                :target="1">
                游戏
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageSetting-Target"
                vly-fade-u2
                :target="2">
                个性化
            </MyPageleftBtn>
            <MyPageleftBtn
                v-model="currentPage"
                storageKey="X-PageSetting-Target"
                vly-fade-u3
                :target="3">
                启动器
            </MyPageleftBtn>
        </MyPageleft>
        <div
            class="Pageright"
            v-if="currentPage === 1">
            <MyCard
                title="111"
                :can-swap="true"
                vly-fade-u1>
                111
            </MyCard>
        </div>
        <div
            class="Pageright"
            v-if="currentPage === 2"></div>
        <div
            class="Pageright"
            v-if="currentPage === 3"></div>
    </main>
</template>

<style lang="scss" scoped>
    .torch {
        top: calc(18px + var(--x-torch));
    }
    div.Pageright {
        @apply w-full h-full p-4 overflow-y-auto;
    }
</style>
