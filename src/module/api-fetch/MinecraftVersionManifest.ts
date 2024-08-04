import { reactive } from "vue";
import { invoke } from "@tauri-apps/api";
import { resolve, appCacheDir } from "@tauri-apps/api/path";
import { SimpleFileIO as IO } from "../SimpleFIleIO";

interface Client {
    id: string;
    type: "release" | "snapshot" | "old_beta" | "old_alpha";
    url: string;
    time: string;
    releaseTime: string;
}

interface VersionManifest {
    release: Client[];
    snapshot: Client[];
    old: Client[];
    fool: Client[];
}

async function get_version_manifest(): Promise<object> {
    try {
        const res: string = await invoke("request_get", {
            url: "https://bmclapi2.bangbang93.com/mc/game/version_manifest.json",
        });
        return JSON.parse(res);
    } catch (err) {
        throw new Error(String(err));
    }
}

async function no_data_handler(): Promise<VersionManifest | string> {
    try {
        const res = await get_version_manifest();
        if (typeof res === "object") {
            // @ts-ignore
            const versions = res["versions"];
            const version_manifest = loading(versions);
            IO.writeTextFile(
                await resolve(
                    await appCacheDir(),
                    "api_fetch",
                    "mc_version_manifest.json"
                ),
                JSON.stringify({
                    data: [...versions],
                    cache_expt: Date.now() + 600 * 1000,
                })
            );
            return version_manifest;
        } else {
            return "error";
        }
    } catch {
        return "error";
    }
}

async function loading(data: Array<Client>) {
    const version_manifest = reactive({
        release: [] as Client[],
        snapshot: [] as Client[],
        old: [] as Client[],
        fool: [] as Client[],
    });
    data.forEach((element: Client) => {
        switch (element["type"]) {
            case "release":
                version_manifest.release.push(element);
                break;
            case "snapshot":
                if (
                    element.releaseTime.includes("04-01") ||
                    element.id === "1.RV-Pre1"
                ) {
                    version_manifest.fool.push(element);
                } else if (
                    [
                        "1.3",
                        "1.4",
                        "1.4.1",
                        "1.4.3",
                        "1.5",
                        "1.6",
                        "1.6.3",
                        "1.7",
                        "1.7.1",
                    ].includes(element.id)
                ) {
                    version_manifest.release.push(element);
                } else {
                    version_manifest.snapshot.push(element);
                }
                break;
            case "old_beta":
            case "old_alpha":
                version_manifest.old.push(element);
        }
    });
    return version_manifest;
}

export {
    type Client,
    type VersionManifest,
    get_version_manifest,
    no_data_handler,
    loading,
};
