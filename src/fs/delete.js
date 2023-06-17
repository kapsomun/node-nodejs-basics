import { access, rm, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const remove = async () => {
    try {
        await access(`${__dirname}/files/fileToRemove.txt`, constants.F_OK);
        await rm(`${__dirname}/files/fileToRemove.txt`)
    } catch (error) {
        throw new Error("FS operation failed")
    }
};

await remove();