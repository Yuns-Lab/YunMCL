<script setup lang="ts">
    import { ref } from "vue";
    import MyUsertype from "./MyUsertype.vue";

    const props = defineProps<{
        username: string;
        type: "legacy" | "microsoft" | "authlib-injector";
    }>();
    const unknown_skin = `data:image/webp;base64,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`;
    const timg = ref<HTMLImageElement | null>(null);
    const onError = (_payload: unknown) => {
        timg.value!.src = unknown_skin;
    };
</script>

<template>
    <div class="MyUsercard">
        <img
            id="bg"
            draggable="false"
            src="@t/usercard.png"
            vly-fade-u />
        <img
            id="skin-1"
            class="-ml-[6px]"
            :src="unknown_skin"
            vly-fade-u1
            draggable="false"
            v-if="props.type !== `microsoft`" />
        <img
            id="skin-2"
            src="https://vzge.me/bust/128/6843823712f3415fbd30b07a2f0b4efa?no=shadow"
            vly-fade-u1
            ref="timg"
            draggable="false"
            @error="onError"
            v-if="props.type === `microsoft`" />
        <div
            id="type"
            vly-fade-u2>
            <MyUsertype :type="props.type" />
        </div>
        <span
            id="id"
            vly-fade-u3>
            LingyunAwA
        </span>
    </div>
</template>

<style lang="scss" scoped>
    div.MyUsercard {
        @apply relative w-[396px] h-[285px];
        img#bg {
            @apply absolute top-0 left-0;
        }
        img#skin-1 {
            @apply absolute bottom-14 left-[2.6rem];
        }
        img#skin-2 {
            @apply absolute bottom-14 left-9;
        }
        div#type {
            @apply absolute top-[10.8rem] right-[11.4rem] text-sm;
        }
        span#id {
            @apply absolute top-[12.7rem] right-[3rem] text-white text-2xl;
        }
    }
</style>
