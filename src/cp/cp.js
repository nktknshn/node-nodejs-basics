/* 
You should implement several functions in dedicated files
cp.js - implement function spawnChildProcess that receives array of arguments args and creates child process from file script.js, passing these args to it. This function should create IPC-channel between stdin and stdout of master process and child process:
    child process stdin should receive input from master process stdin
    child process stdout should send data to master process stdout

*/
import { spawn } from 'node:child_process'
import path from 'node:path'

import { fileURLToPath } from 'url';

export const getAbsolutePath = (relativePath) => {
    return path.join(
        path.dirname(fileURLToPath(import.meta.url)), 
        ...relativePath.split('/')
    )
};

const spawnChildProcess = async (args) => {
    const scriptPath = getAbsolutePath('files/script.js')

    const script = spawn(
        'node', [scriptPath, ...(args ?? [])],
        {
            stdio: [process.stdin, process.stdout, 'ignore']
        }
    )

    script.on('close', code => {
        if (code == 0) { return }
        console.error(`Child process stopped with code: ${code}`);
        script.kill()
    })
};

spawnChildProcess([1, 2, 3]);
