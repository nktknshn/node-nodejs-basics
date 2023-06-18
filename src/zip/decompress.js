import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";
import { pipeline } from 'stream/promises';

const decompressFile = (file, outputFile) => 
    pipeline(
        createReadStream(file),
        createGunzip(),
        createWriteStream(outputFile)
    )

/* 
decompress.js - implement function that decompresses archive.gz back to the fileToCompress.txt with same content as before compression using zlib and Streams API
*/
const decompress = async () => {
    await decompressFile(
        'src/zip/files/archive.gz',
        'src/zip/files/fileToCompress.txt', 
    ) 
};

await decompress();