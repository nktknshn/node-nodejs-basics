import { promises as fs } from 'fs';
import { exists } from './helpers.js'

/*
list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)
*/
const list = async () => {
    const files = './files'

    if(!(await exists(files))) {
        throw new Error('FS operation failed')
    }

    const dir = await fs.opendir(files)

    while(true) {
        const item = await dir.read()

        if(item === null){
            break
        }

        console.log(item.name)
    }
};

await list();