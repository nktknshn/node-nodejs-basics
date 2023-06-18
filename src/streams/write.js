import { createWriteStream } from "fs";
import { pipeline } from "stream/promises";

const writeFromStdin = (file) =>
    pipeline(
        process.stdin,
        createWriteStream(file),
    )

/* 
write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream
*/
const write = async () => {
    await writeFromStdin('./src/streams/files/fileToWrite.txt') 
};

await write();