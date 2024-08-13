<script setup lang="ts">
    const props = defineProps<{
        type: "legacy" | "microsoft" | "authlib-injector";
    }>();
</script>

<template>
    <div class="flex">
        <span
            class="legacy"
            v-if="props.type === `legacy`">
            离
        </span>
        <span
            class="legacy"
            v-if="props.type === `legacy`">
            线
        </span>
        <span
            class="microsoft"
            v-if="props.type === `microsoft`">
            正
        </span>
        <span
            class="microsoft"
            v-if="props.type === `microsoft`">
            版
        </span>
        <span
            class="authlib-injector"
            v-if="props.type === `authlib-injector`">
            三
        </span>
        <span
            class="authlib-injector"
            v-if="props.type === `authlib-injector`">
            方
        </span>
    </div>
</template>

<style lang="scss" scoped>
    span {
        @apply flex justify-center items-center w-6 h-6 text-white;
        background-size: 24px 24px;
        &.legacy {
            background-image: url("@t/legacy.png");
        }
        &.microsoft {
            background-image: url("@t/ms.png");
        }
        &.authlib-injector {
            background-image: url("@t/authlib.png");
        }
    }
</style>
