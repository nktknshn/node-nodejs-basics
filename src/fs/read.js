import { createReadStream } from 'fs';
import { pipeline } from 'stream/promises';
import { getAbsolutePath } from './helpers.js';

/* 
read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
*/
const read = async () => {
    const fileToRead = getAbsolutePath('./files/fileToRead.txt')
    await pipeline(
        createReadStream(fileToRead),
        process.stdout
    )
};

await read();