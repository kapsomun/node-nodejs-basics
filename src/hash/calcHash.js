import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const calculateHash = async () => {
    try {
        const fileData = await readFile(`${currentDirPath}/files/fileToCalculateHashFor.txt`);
        const hash = createHash('sha256').update(fileData).digest('hex');
        console.log(hash);
    } catch (error) {
        console.error(`Error reading the file: ${error}`);
    }
};


await calculateHash();