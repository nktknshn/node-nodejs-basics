import os from 'os'
import { Worker } from 'node:worker_threads'
import path from 'path'
import { fileURLToPath } from 'url';

export const getAbsolutePath = (relativePath) => {
    return path.join(
        path.dirname(fileURLToPath(import.meta.url)), 
        ...relativePath.split('/')
    )
};

/* 
    main.js - implement function that creates number of worker threads (equal to the number of host machine logical CPU cores) from file worker.js 
    
    and able to send data to those threads and to receive result of the computation from them. 
    
    You should send incremental number starting from 10 to each worker. 
    
    For example: on host machine with 4 cores you should create 4 workers and send 10 to first worker, 11 to second worker, 12 to third worker, 13 to fourth worker. 
    
    After all workers will finish, function should log array of results into console. 
    
    The results are array of objects with 2 properties:
        status - 'resolved' in case of successfully received value from worker or 'error' in case of error in worker

        data - value from worker in case of success or null in case of error in worker

The results in the array must be in the same order that the workers were created
*/
const range = (to) => [...Array(to).keys()]

const compute = (value) => new Promise((resolve, reject) => {
    const worker = new Worker(
        getAbsolutePath('worker.js'), { workerData: { value} }
    )

    worker.on('message', resolve)
    worker.on('error', reject) 
    worker.on('exit', code => {
        if(code == 0) {
            return
        }
        reject({ status: 'error', data: null })
    })
})

const performCalculations = async () => {
    const workersNumber = os.cpus().length
    const workers = range(workersNumber).map((idx) => compute(idx + 10))
    const result = await Promise.all(workers)
    console.log(result);
};

await performCalculations();