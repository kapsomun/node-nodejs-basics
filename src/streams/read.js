import fs from "fs"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const read = async () => {
    const readStream = fs.createReadStream(`${currentDirPath}/files/fileToRead.txt`)
    readStream.on("data", (chunk) => {
        process.stdout.write(chunk);
    })

}

await read();