<script setup lang="ts">
    import MyRouteBtn from "./MyRouteBtn.vue";
    import MyRouteChildBtn from "./MyRouteChildBtn.vue";

    import { useRoute } from "vue-router";
    const $route = useRoute();

    import { default as manifest } from "../app/manifest.json";
</script>

<template>
    <div
        class="p-4 w-full h-full text-white relative flex flex-col transition-all">
        <p
            class="text-[3.3vw]"
            style="line-height: 3.3vw"
            fade-u>
            {{ `Welcome,` }}
        </p>
        <p
            class="text-[1.7vw] ml-[4vw]"
            fade-u1>
            {{ `LingyunAwA.` }}
        </p>
        <div>
            <MyRouteBtn
                route="/"
                style="margin-top: 4rem !important"
                fade-u2>
                {{ `主页` }}
            </MyRouteBtn>
            <div>
                <MyRouteBtn
                    route="/download"
                    class="bg-[var(--sbtn-bg)]"
                    haschild
                    fade-u3>
                    {{ `下载` }}
                </MyRouteBtn>
                <div v-if="$route.path.startsWith('/download')">
                    <MyRouteChildBtn
                        route="/download/auto"
                        fade-u>
                        {{ `自动安装` }}
                    </MyRouteChildBtn>
                    <MyRouteChildBtn
                        route="/download/manual"
                        fade-u1>
                        {{ `手动安装` }}
                    </MyRouteChildBtn>
                    <MyRouteChildBtn
                        route="/download/mod"
                        fade-u2>
                        {{ `Mod` }}
                    </MyRouteChildBtn>
                    <MyRouteChildBtn
                        route="/download/modpack"
                        fade-u3>
                        {{ `整合包` }}
                    </MyRouteChildBtn>
                </div>
            </div>
            <div>
                <MyRouteBtn
                    route="/settings"
                    class="bg-[var(--sbtn-bg)]"
                    haschild
                    fade-u4>
                    {{ `设置` }}
                </MyRouteBtn>
                <div v-if="$route.path.startsWith('/settings')">
                    <MyRouteChildBtn
                        route="/settings/minecraft"
                        fade-u>
                        {{ `游戏` }}
                    </MyRouteChildBtn>
                    <MyRouteChildBtn
                        route="/settings/customize"
                        fade-u1>
                        {{ `个性化` }}
                    </MyRouteChildBtn>
                    <MyRouteChildBtn
                        route="/settings/launcher"
                        fade-u2>
                        {{ `启动器` }}
                    </MyRouteChildBtn>
                </div>
            </div>
        </div>
        <div class="btm flex justify-center items-center gap-6">
            <img
                src="/images/YunMCL.png"
                width="90" />
            <div class="flex flex-col items-center">
                <span>YunMCL v{{ manifest.app_version }}</span>
                <hr class="w-[7.2rem] mt-1 mb-1" />
                <span class="-mb-1">{{ manifest.app_channel[0] }}渠道</span>
                <span>{{ manifest.app_channel[1] }} Channel</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    div.btm {
        @apply mt-auto;
        margin-bottom: 2rem;
    }
</style>
