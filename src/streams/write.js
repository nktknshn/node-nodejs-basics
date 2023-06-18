import { createWriteStream } from "fs";

const writeFromStdin = (file) => new Promise((resolve, reject) => {
    process.stdin
    .pipe(createWriteStream(file))
    .on('error', reject)
    .on('end', () => resolve())
})


/* 
write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
*/
const write = async () => {
    // Write your code here
    await writeFromStdin('./src/streams/files/fileToWrite.txt') 
};

await write();