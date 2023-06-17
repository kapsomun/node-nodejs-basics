import { readdir, mkdir, copyFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const copy = async () => {
  try {
    await mkdir(`${currentDirPath}/files_copy/`);
    const files = await readdir(`${currentDirPath}/files`);
    for (const file of files) {
      const sourceFile = join(`${currentDirPath}/files/`, file);
      const destinationFile = join(`${currentDirPath}/files_copy/`, file);

      await copyFile(sourceFile, destinationFile);
      console.log(`File ${sourceFile} copied to ${destinationFile}`);
    }
  } catch {
    throw new Error("FS operation failed")
  }
};

await copy();
