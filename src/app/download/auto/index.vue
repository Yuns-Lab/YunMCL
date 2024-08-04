<script setup lang="ts">
    import MyCard from "../../../components/MyCard.vue";
    import MyLoading from "../../../components/MyLoading.vue";
    import MyItem from "../../../components/MyItem.vue";
    import MyInpWarning from "../../../components/MyInpWarning.vue";

    import { onMounted, ref, reactive } from "vue";
    import { resolve, appCacheDir } from "@tauri-apps/api/path";
    import { SimpleFileIO as IO } from "../../../module/SimpleFIleIO";
    import {
        type Client,
        no_data_handler,
        loading,
    } from "../../../module/api-fetch/MinecraftVersionManifest";

    const status = ref("pending");
    const version_manifest = reactive({
        release: [] as Client[],
        snapshot: [] as Client[],
        old: [] as Client[],
        fool: [] as Client[],
    });
    const currentTab = ref(
        localStorage.getItem("X-Download-Auto-CurrentTab") ?? "release"
    );

    function generate_date(isoDateString: string) {
        const date = new Date(isoDateString);
        const localYear = date.getFullYear();
        const localMonth = (date.getMonth() + 1).toString().padStart(2, "0");
        const localDay = date.getDate().toString().padStart(2, "0");
        const localHours = date.getHours().toString().padStart(2, "0");
        const localMinutes = date.getMinutes().toString().padStart(2, "0");
        return `${localYear}/${localMonth}/${localDay} ${localHours}:${localMinutes}`;
    }

    function switch_page(page: "release" | "snapshot" | "old" | "fool"): void {
        currentTab.value = page;
        localStorage.setItem("X-Download-Auto-CurrentTab", page);
    }

    onMounted(async () => {
        const isCache = await IO.fileExists(
            await resolve(
                await appCacheDir(),
                "api_fetch",
                "mc_version_manifest.json"
            )
        );
        if (isCache) {
            const data = JSON.parse(
                await IO.readTextFile(
                    await resolve(
                        await appCacheDir(),
                        "api_fetch",
                        "mc_version_manifest.json"
                    )
                )
            );
            if (Date.now() > data.cache_expt) {
                await no_data_handler();
            } else {
                const cData = data.data;
                const resp = await loading(cData);
                switch (typeof resp) {
                    case "object":
                        version_manifest.release = resp.release;
                        version_manifest.snapshot = resp.snapshot;
                        version_manifest.old = resp.old;
                        version_manifest.fool = resp.fool;
                        status.value = "fulfilled";
                        break;
                    case "string":
                        status.value = "error";
                        break;
                }
            }
        } else {
            const cData = await no_data_handler();
            switch (typeof cData) {
                case "object":
                    version_manifest.release = cData.release;
                    version_manifest.snapshot = cData.snapshot;
                    version_manifest.old = cData.old;
                    version_manifest.fool = cData.fool;
                    status.value = "fulfilled";
                    break;
                case "string":
                    status.value = "error";
                    break;
            }
        }
    });
</script>

<template>
    <div
        class="radio-inputs"
        fade-l>
        <label
            class="radio"
            fade-l1>
            <input
                type="radio"
                name="radio"
                :checked="currentTab === `release`"
                @click="switch_page(`release`)" />
            <span class="name">
                <img src="/images/blocks/Grass.png" />
                正式版
            </span>
        </label>
        <label
            class="radio"
            fade-l2>
            <input
                type="radio"
                name="radio"
                :checked="currentTab === `snapshot`"
                @click="switch_page(`snapshot`)" />
            <span class="name">
                <img src="/images/blocks/CommandBlock.png" />
                快照版
            </span>
        </label>
        <label
            class="radio"
            fade-l3>
            <input
                type="radio"
                name="radio"
                :checked="currentTab === `old`"
                @click="switch_page(`old`)" />
            <span class="name">
                <img src="/images/blocks/CobbleStone.png" />
                远古版
            </span>
        </label>
        <label
            class="radio"
            fade-l4>
            <input
                type="radio"
                name="radio"
                :checked="currentTab === `fool`"
                @click="switch_page(`fool`)" />
            <span class="name">
                <img src="/images/blocks/GoldBlock.png" />
                愚人节版
            </span>
        </label>
    </div>
    <hr class="mb-4" />
    <MyLoading v-if="status === `pending`" />
    <MyCard
        class="max-h-[calc(100vh-42px-32px-52px-0.8px-16px)] overflow-y-auto"
        padding
        fade-u1
        v-if="status === `fulfilled`">
        <div v-if="currentTab === `release`">
            <MyItem
                v-for="item in version_manifest.release"
                :key="item.id"
                :title="item.id.toString()"
                :desp="generate_date(item.releaseTime)">
                <template #img>
                    <img
                        class="w-9 h-9"
                        src="/images/blocks/Grass.png" />
                </template>
            </MyItem>
        </div>
        <div v-if="currentTab === `snapshot`">
            <MyItem
                v-for="item in version_manifest.snapshot"
                :key="item.id"
                :title="item.id.toString()"
                :desp="generate_date(item.releaseTime)">
                <template #img>
                    <img
                        class="w-9 h-9"
                        src="/images/blocks/CommandBlock.png" />
                </template>
            </MyItem>
        </div>
        <div v-if="currentTab === `old`">
            <MyItem
                v-for="item in version_manifest.old"
                :key="item.id"
                :title="item.id.toString()"
                :desp="generate_date(item.releaseTime)">
                <template #img>
                    <img
                        class="w-9 h-9"
                        src="/images/blocks/CobbleStone.png" />
                </template>
            </MyItem>
        </div>
        <div v-if="currentTab === `fool`">
            <MyItem
                v-for="item in version_manifest.fool"
                :key="item.id"
                :title="item.id.toString()"
                :desp="generate_date(item.releaseTime)">
                <template #img>
                    <img
                        class="w-9 h-9"
                        src="/images/blocks/GoldBlock.png" />
                </template>
            </MyItem>
        </div>
    </MyCard>
    <MyInpWarning fade-r10 />
</template>

<style lang="scss" scoped>
    .radio-inputs {
        @apply relative flex flex-wrap rounded-tl-lg rounded-tr-lg bg-white box-border p-1 w-[462px] text-lg;
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
