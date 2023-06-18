import { createReadStream } from "fs";

const readToStdout = (file) => new Promise((resolve, reject) => {
    createReadStream(file)
    .on('error', reject)
    .pipe(process.stdout)
    .on('end', () => resolve())
})

/* 
read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
*/
const read = async () => {
    // Write your code here
    // createReadStream().pipe(process.stdout)
    await readToStdout('./src/streams/files/fileToRead.txt'); 
};

await read();