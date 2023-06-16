import { readFile } from 'node:fs/promises';
import { dirname } from "path";
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const read = async () => {
  try {
    const content = await readFile(`${currentDirPath}/files/fileToRead.txt`, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed")
  }
};

await read();