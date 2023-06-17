import { access, rm, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const remove = async () => {
    try {
        await access(`${currentDirPath}/files/fileToRemove.txt`, constants.F_OK);
        await rm(`${currentDirPath}/files/fileToRemove.txt`)
    } catch (error) {
        throw new Error("FS operation failed")
    }
};

await remove();