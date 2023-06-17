import { access, rename as fsRename, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const rename = async () => {
    try {
        await access(`${currentDirPath}/files/properFilename.md`, constants.F_OK);
        throw new Error("FS operation failed")
    } catch (error) {
        try {
            await access(`${currentDirPath}/files/wrongFilename.txt`, constants.F_OK);
            await fsRename(`${currentDirPath}/files/wrongFilename.txt`, `${currentDirPath}/files/properFilename.md`)
        } catch (error) {
            throw new Error("FS operation failed")
        }
    }
};

await rename();