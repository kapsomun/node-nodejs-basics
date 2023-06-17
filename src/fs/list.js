import { readdir, access, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const list = async () => {
    try {
        await access(`${currentDirPath}/files`, constants.F_OK);
        const files = await readdir(`${currentDirPath}/files/`);
        console.log(files);
    } catch (error) {
        throw new Error("FS operation failed")
    }
   
};

await list();