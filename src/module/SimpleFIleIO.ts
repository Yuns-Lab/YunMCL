import { readTextFile, writeTextFile } from "@tauri-apps/api/fs";

export class SimpleFileIO {
    /**
     * Reads a file and returns its contents as a string.
     * @param path The path to the file.
     * @returns The contents of the file as a string.
     */
    public static async readTextFile(path: string): Promise<string> {
        return await readTextFile(path);
    }
    /**
     *
     * Writes a content to a file.
     * @param path The path to the file.
     * @param content The content to write to the file.
     */
    public static async writeTextFile(
        path: string,
        content: string
    ): Promise<void> {
        return await writeTextFile(path, content);
    }
    /**
     * Checks if a file exists.
     * @param path The path to the file.
     * @returns True if the file exists, false otherwise.
     */
    public static async fileExists(path: string): Promise<boolean | null> {
        try {
            await readTextFile(path);
            return true;
        } catch (_e) {
            return false;
        }
    }
}
