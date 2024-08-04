import { reactive } from "vue";
import { invoke } from "@tauri-apps/api";
import { resolve, appCacheDir } from "@tauri-apps/api/path";
import { SimpleFileIO as IO } from "../SimpleFIleIO";

interface ForgeFile {
    format: string;
    category: string;
    hash: string;
}

interface ForgeBuild {
    _id: string;
    build: number;
    __v: number;
    version: string;
    modified: string;
    mcversion: string;
    files: ForgeFile[];
    branch: string | null;
}

interface Forge {
    _id: string;
    name: string;
    build: ForgeBuild;
    __v: number;
}

async function get_version_manifest() {}
