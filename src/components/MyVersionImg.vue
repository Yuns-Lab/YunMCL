<script setup lang="ts">
    import { ref } from "vue";

    type mcType = "release" | "snapshot" | "old" | "fool" | "unknown";
    const props = defineProps<{
        version?: number | string;
        type: mcType;
    }>();

    const imgName = ref("");
    switch (props.type) {
        case "release":
        case "snapshot":
            const splited = props.version?.toString().split(".") || "1.21";
            const splited_2 = splited[1].includes("-")
                ? splited[1].split("-")[0]
                : splited[1];
            imgName.value = splited[0] + "_" + splited_2;
            if (imgName.value == "1_0") imgName.value = "0b1_8";
            break;
        case "old":
            imgName.value = "0b_less";
            break;
        case "fool":
            imgName.value =
                "0c" +
                props.version?.toString().toLowerCase().replace(".", "_");
            break;
        case "unknown":
            break;
    }
</script>

<template>
    <div class="w-full h-60">
        <div class="w-full h-full bg-black absolute opacity-35 z-[1]"></div>
        <!-- Pre Version -->
        <img
            v-if="imgName === `0b_less`"
            src="/images/versions/0b_less.webp" />
        <img
            v-if="imgName === `0b1_8` || imgName === `1.0`"
            src="/images/versions/0b1_8.webp" />
        <!-- April Fool Version -->
        <img
            v-if="imgName === `0c1_rv-pre1`"
            src="/images/versions/0c1_rv-pre1.webp" />
        <img
            v-if="imgName === `0c2_0`"
            src="/images/versions/0c2_0.webp" />
        <img
            v-if="imgName === `0c3dsharewarev1_34`"
            src="/images/versions/0c3dsharewarev1_34.webp" />
        <img
            v-if="imgName === `0c15w14a`"
            src="/images/versions/0c15w14a.webp" />
        <img
            v-if="imgName === `0c20w14infinite`"
            src="/images/versions/0c20w14infinite.webp" />
        <img
            v-if="imgName === `0c22w13onblockatatime`"
            src="/images/versions/0c22w13oneblockatatime.webp" />
        <img
            v-if="imgName === `0c23w13a_or_b`"
            src="/images/versions/0c23w13a_or_b.webp" />
        <img
            v-if="imgName === `0c24w14potato`"
            src="/images/versions/0c24w14potato.webp" />
        <!-- Release Version -->
        <img
            v-if="imgName === `1_1`"
            src="/images/versions/1_1.webp" />
        <img
            v-if="imgName === `1_2`"
            src="/images/versions/1_2.webp" />
        <img
            v-if="imgName === `1_3`"
            src="/images/versions/1_3.webp" />
        <img
            v-if="imgName === `1_4`"
            src="/images/versions/1_4.webp" />
        <img
            v-if="imgName === `1_5`"
            src="/images/versions/1_5.webp" />
        <img
            v-if="imgName === `1_6`"
            src="/images/versions/1_6.webp" />
        <img
            v-if="imgName === `1_7`"
            src="/images/versions/1_7.webp" />
        <img
            v-if="imgName === `1_8`"
            src="/images/versions/1_8.webp" />
        <img
            v-if="imgName === `1_9`"
            src="/images/versions/1_9.webp" />
        <img
            v-if="imgName === `1_10`"
            src="/images/versions/1_10.webp" />
        <img
            v-if="imgName === `1_11`"
            src="/images/versions/1_11.webp" />
        <img
            v-if="imgName === `1_12`"
            src="/images/versions/1_12.webp" />
        <img
            v-if="imgName === `1_13`"
            src="/images/versions/1_13.webp" />
        <img
            v-if="imgName === `1_14`"
            src="/images/versions/1_14.webp" />
        <img
            v-if="imgName === `1_15`"
            src="/images/versions/1_15.webp" />
        <img
            v-if="imgName === `1_16`"
            src="/images/versions/1_16.webp" />
        <img
            v-if="imgName === `1_17`"
            src="/images/versions/1_17.webp" />
        <img
            v-if="imgName === `1_18`"
            src="/images/versions/1_18.webp" />
        <img
            v-if="imgName === `1_19`"
            src="/images/versions/1_19.webp" />
        <img
            v-if="imgName === `1_20`"
            src="/images/versions/1_20.webp" />
        <img
            v-if="imgName === `1_21`"
            src="/images/versions/1_21.webp" />
    </div>
</template>

<style lang="scss" scoped>
    img {
        @apply w-full h-full object-cover blur-[4px];
        object-position: 12% 45%;
    }
</style>
