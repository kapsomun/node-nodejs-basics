import { readdir, access, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const list = async () => {
    try {
        await access(`${__dirname}/files`, constants.F_OK);
        const files = await readdir(`${__dirname}/files/`);
        console.log(files);
    } catch (error) {
        throw new Error("FS operation failed")
    }
   
};

await list();