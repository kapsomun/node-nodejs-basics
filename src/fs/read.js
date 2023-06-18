import { readFile } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const read = async () => {
  try {
    const content = await readFile(`${__dirname}/files/fileToRead.txt`, { encoding: 'utf8' });
    console.log(content);
  } catch (err) {
    throw new Error("FS operation failed")
  }
};

await read();