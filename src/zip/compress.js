
import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib'

const compressFile = (file, outputFile) => new Promise((resolve, reject) => {
    createReadStream(file)
    .on('error', reject)
    .pipe(createGzip())
    .pipe(
        createWriteStream(outputFile)
        .on('error', reject)
    )
    .on('end', () => resolve())
})

/* 
compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
*/
const compress = async () => {
    await compressFile(
        'src/zip/files/fileToCompress.txt', 
        'src/zip/files/archive.gz'
    ) 
};

await compress();