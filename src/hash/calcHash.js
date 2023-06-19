import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs';

import path from 'path'
export const getAbsolutePath = (relativePath) => {
    return path.join(path.dirname(new URL(import.meta.url).pathname), relativePath) 
};

const getFileHash = (file) => new Promise((resolve, reject) => {
        const hash = createHash('sha256')
        const fileStream = createReadStream(file)
        
        fileStream.on('error', reject)

        fileStream.on('data', (chunk) => {
            hash.update(chunk)
        })

        fileStream.on('end', () => {
            resolve(hash.digest('hex'))
        })
    })

/* 
calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
*/
const calculateHash = async () => {
    const hash = await getFileHash(getAbsolutePath('files/fileToCalculateHashFor.txt'))
    console.log(hash);
};

await calculateHash();