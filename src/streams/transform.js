import { Transform } from "stream";
import { pipeline } from "stream/promises";

const reverseTransform = new Transform({
    transform: (chunk, encoding, cb) => {
        const chunkAsString = chunk.toString().trim() 
        const reversed = chunkAsString.split('').reverse().join('')
        cb(undefined, reversed + '\n')
    }
})

/* 
transform.js - implement function that reads data from process.stdin, reverses text using Transform Stream and then writes it into process.stdout
*/
const transform = async () => {
    await pipeline(
        process.stdin,
        reverseTransform,
        process.stdout,
    )
};

await transform();