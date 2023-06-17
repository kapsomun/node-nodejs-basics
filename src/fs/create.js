import { access, writeFile, constants } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const create = async () => {
  try {
    await access(`${currentDirPath}/files/fresh.txt`, constants.F_OK);
    throw new Error("FS operation failed")
  } catch (error) {
    await writeFile(`${currentDirPath}/files/fresh.txt`, "I am fresh and young");
  }
};

await create();
