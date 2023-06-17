import { promises as fs } from 'fs';
import { exists } from './helpers.js';

/* 
copy.js - implement function that copies folder files files with all its content into folder files_copy at the same level (if files folder doesn't exists or files_copy has already been created Error with message FS operation failed must be thrown)
*/
const copy = async () => {
    const copyFrom = './files'
    const copyTo = './files_copy'

    if(!(await exists(copyFrom))) {
        throw new Error('FS operation failed')
    }

    if(await exists(copyTo)) {
        throw new Error('FS operation failed')
    }
    
    await fs.mkdir(copyTo)
    
    const dir = await fs.opendir(copyFrom)

    while(true) {
        const item = await dir.read()

        if(item === null){
            break
        }

        await fs.copyFile(`${copyFrom}/${item.name}`, `${copyTo}/${item.name}`)
    }
};

await copy();
