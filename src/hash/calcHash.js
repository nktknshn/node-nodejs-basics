import { createHash } from 'node:crypto'
import { createReadStream } from 'node:fs';

const getFileHash = (file) => new Promise((resolve, reject) => {
        const hash = createHash('sha256')
        const fileStream = createReadStream(file).on('error', reject)

        fileStream.on('readable', () => {
            while(true) {
                const chunk = fileStream.read()
                if(chunk === null) {
                    return
                }
                hash.update(chunk)
            }
        })
        .on('end', () => {
            resolve(hash.digest('hex'))
        })
    })

/* 
calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and logs it into console as hex
*/
const calculateHash = async () => {
    console.log(await getFileHash('src/hash/files/fileToCalculateHashFor.txt'));
};

await calculateHash();