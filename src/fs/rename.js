import { promises as fs } from 'fs';
import { exists, getAbsolutePath } from './helpers.js'

/* 
rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)
*/
const rename = async () => {
    const renameFrom = getAbsolutePath('./files/wrongFilename.txt');
    const renameTo = getAbsolutePath('./files/properFilename.md');

    if (!(await exists(renameFrom)) || await exists(renameTo)) {
        throw new Error('FS operation failed')
    }

    await fs.rename(renameFrom, renameTo);
    // Write your code here 
};

await rename();