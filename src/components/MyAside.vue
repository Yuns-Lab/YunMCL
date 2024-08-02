<script setup lang="ts">
    import MyRouteBtn from "./MyRouteBtn.vue";
    import MyRouteChildBtn from "./MyRouteChildBtn.vue";

    import { useRoute } from "vue-router";
    const $route = useRoute();
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
    </div>
</template>
