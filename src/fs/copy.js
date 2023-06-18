import { readdir, mkdir, copyFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const copy = async () => {
  try {
    await mkdir(`${__dirname}/files_copy/`);
    const files = await readdir(`${__dirname}/files`);
    for (const file of files) {
      const sourceFile = join(`${__dirname}/files/`, file);
      const destinationFile = join(`${__dirname}/files_copy/`, file);

      await copyFile(sourceFile, destinationFile);
      console.log(`File ${sourceFile} copied to ${destinationFile}`);
    }
  } catch {
    throw new Error("FS operation failed")
  }
};

await copy();
