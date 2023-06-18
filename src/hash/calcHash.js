import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const calculateHash = async () => {
    try {
        const fileData = await readFile(`${__dirname}/files/fileToCalculateHashFor.txt`);
        const hash = createHash('sha256').update(fileData).digest('hex');
        console.log(hash);
    } catch (error) {
        console.error(`Error reading the file: ${error}`);
    }
};


await calculateHash();