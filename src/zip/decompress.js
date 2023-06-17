import { createUnzip } from "zlib"
import { pipeline } from "stream";
import fs from "fs";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { promisify } from 'util';

const pipe = promisify(pipeline);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const decompress = async () => {
    try {
        const unzip = createUnzip()
        const destination = fs.createWriteStream(`${__dirname}/files/fileToCompress.txt`);
        const source = fs.createReadStream(`${__dirname}/files/archive.gz`);
        await pipe(source, unzip, destination)
    } catch (error) {
        console.error('An error occurred:', error);
        process.exitCode = 1;
    }
};

await decompress();
