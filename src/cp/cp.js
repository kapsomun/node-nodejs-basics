import { fork } from "child_process"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const spawnChildProcess = async (args) => {
    const childProcess = fork(`${__dirname}/files/script.js`, args.split(' '))
    
    childProcess.on('message', (message) => {
        process.stdout.write(message);
    });
    
    childProcess.on('error', (error) => {
        console.error('Child process error:', error);
    });

};


spawnChildProcess('someArgument1 someArgument2');
