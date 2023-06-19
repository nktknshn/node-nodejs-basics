import { promises as fs } from 'fs';
import { exists, getAbsolutePath } from './helpers.js'

/* 
read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)
*/
const read = async () => {
    const fileToRead = getAbsolutePath('./files/fileToRead.txt')

    if (!(await exists(fileToRead))) {
        throw new Error('FS operation failed')
    }

    const fh = await fs.open(fileToRead, 'r')

    const content = await fh.readFile({ encoding: 'utf-8' })

    console.log(content)

    await fh.close()
};

await read();