<script setup lang="ts">
    import MyCard from "../../../components/MyCard.vue";
    import MyInpWarning from "../../../components/MyInpWarning.vue";
</script>

<template>
    <div class="radio-inputs">
        <label class="radio">
            <input
                type="radio"
                name="radio"
                checked />
            <span class="name">
                <img src="/images/blocks/Grass.png" />
                正式版
            </span>
        </label>
        <label class="radio">
            <input
                type="radio"
                name="radio" />
            <span class="name">
                <img src="/images/blocks/CommandBlock.png" />
                快照版
            </span>
        </label>
        <label class="radio">
            <input
                type="radio"
                name="radio" />
            <span class="name">
                <img src="/images/blocks/CobbleStone.png" />
                远古版
            </span>
        </label>
        <label class="radio">
            <input
                type="radio"
                name="radio" />
            <span class="name">
                <img src="/images/blocks/GoldBlock.png" />
                愚人节版
            </span>
        </label>
        <label class="radio">
            <input
                type="radio"
                name="radio" />
            <span class="name">
                <img src="/images/modding/Forge.png" />
                Forge
            </span>
        </label>
        <label class="radio">
            <input
                type="radio"
                name="radio" />
            <span class="name">
                <img src="/images/modding/NeoForge.png" />
                NeoForge
            </span>
        </label>
        <label class="radio">
            <input
                type="radio"
                name="radio" />
            <span class="name">
                <img src="/images/modding/Fabric.png" />
                Fabric
            </span>
        </label>
    </div>
    <MyCard
        padding
        class="rounded-tl-none"></MyCard>
    <MyInpWarning fade-r10 />
</template>

<style lang="scss" scoped>
    .radio-inputs {
        @apply relative flex flex-wrap rounded-tl-lg rounded-tr-lg bg-white box-border p-1 w-[800px] text-lg;
        box-shadow: 0 0 0px 1px rgba(0, 0, 0, 0.06);
        .radio {
            @apply text-center;
            flex: 1 1 auto;
            input {
                @apply hidden;
                &:checked + .name {
                    @apply bg-gray-200 font-semibold;
                }
            }
            .name {
                @apply flex cursor-pointer items-center justify-center rounded-[4px] border-none pt-2 pb-2 transition-all duration-150 ease-in-out;
                img {
                    @apply w-5 mr-1;
                }
            }
        }
    }
</style>
