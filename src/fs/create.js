import { promises as fs } from 'fs';
import { exists } from './helpers.js';

/* 
create.js - implement function that creates new file fresh.txt with content I am fresh and young inside of the files folder (if file already exists Error with message FS operation failed must be thrown)
*/
const create = async () => {
    const path = './files/fresh.txt'

    if(await exists(path)) {
        throw new Error('FS operation failed')
    }
    
    await fs.writeFile(path, 'I am fresh and young');
};

await create();