import fs from 'fs/promises';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const currentFilePath = fileURLToPath(import.meta.url);
const currentDirPath = dirname(currentFilePath);

const write = async () => {

    try {
        const fileHandle = await fs.open(`${currentDirPath}/files/fileToWrite.txt`, 'w');
        const writeStream = fileHandle.createWriteStream();
        process.stdin.pipe(writeStream);

        process.stdin.on('end', async () => {
            await fileHandle.close();
        });
    } catch (error) {
        console.error('Error occurred while writing to the file:', error);
    }
};

write();
