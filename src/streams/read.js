import { createReadStream } from "fs";
import { pipeline } from "stream/promises";

const readToStdout = (file) =>
    pipeline(
        createReadStream(file),
        process.stdout
    )

/* 
read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
*/
const read = async () => {
    // Write your code here
    // createReadStream().pipe(process.stdout)
    await readToStdout('./src/streams/files/fileToRead.txt'); 
};

await read();