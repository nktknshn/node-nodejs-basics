import { createReadStream } from "fs";
import { pipeline } from "stream/promises";
import { getAbsolutePath } from "./helpers.js";

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
    await readToStdout(getAbsolutePath('files/fileToRead.txt')); 
};

await read();