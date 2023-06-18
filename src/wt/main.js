import { Worker } from 'worker_threads';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import os from 'os';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workerPromises = [];

    for (let i = 0; i < numCores; i++) {
        const data = i + 10;
        const promise = new Promise((resolve, reject) => {
            const worker = new Worker(`${__dirname}/worker.js`, { workerData: data });

            worker.on('message', message => {
                resolve({ status: 'resolved', data: message });
            });

            worker.on('error', error => {
                reject({ status: 'error', data: null });
            });
        });

        workerPromises.push(promise);
    }

    const results = await Promise.all(workerPromises);
    console.log('Results:', results);
};

await performCalculations();
