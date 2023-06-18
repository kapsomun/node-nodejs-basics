import { access, rename as fsRename, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const rename = async () => {
    try {
        await access(`${__dirname}/files/properFilename.md`, constants.F_OK);
        throw new Error("FS operation failed")
    } catch (error) {
        try {
            await access(`${__dirname}/files/wrongFilename.txt`, constants.F_OK);
            await fsRename(`${__dirname}/files/wrongFilename.txt`, `${__dirname}/files/properFilename.md`)
        } catch (error) {
            throw new Error("FS operation failed")
        }
    }
};

await rename();