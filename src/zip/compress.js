
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream/promises';
import { createGzip } from 'zlib'
import { getAbsolutePath } from './helpers.js';

const compressFile =  (file, outputFile) => pipeline(
    createReadStream(file),
    createGzip(),
    createWriteStream(outputFile)
) 

/* 
compress.js - implement function that compresses file fileToCompress.txt to archive.gz using zlib and Streams API
*/
const compress = async () => {
    await compressFile(
        getAbsolutePath('files/fileToCompress.txt'), 
        getAbsolutePath('files/archive.gz')
    ) 
};

await compress();