import { access, writeFile, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const create = async () => {
  try {
    await access(`${__dirname}/files/fresh.txt`, constants.F_OK);
    throw new Error("FS operation failed")
  } catch (error) {
    await writeFile(`${__dirname}/files/fresh.txt`, "I am fresh and young");
  }
};

await create();
