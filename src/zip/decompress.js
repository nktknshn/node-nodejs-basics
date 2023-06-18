import { createReadStream, createWriteStream } from "fs";
import { createGunzip } from "zlib";

const decompressFile = (file, outputFile) => new Promise((resolve, reject) => {
    createReadStream(file)
    .on('error', reject)
    .pipe(createGunzip().on('error', reject))
    .pipe(
        createWriteStream(outputFile)
        .on('error', reject)
    )
    .on('end', () => resolve())
})


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