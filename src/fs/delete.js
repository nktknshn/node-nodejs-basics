import { promises as fs } from "fs";
import { exists, getAbsolutePath } from "./helpers.js";

/* 
delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
*/
const remove = async () => {
    const fileToRemove = getAbsolutePath('files/fileToRemove.txt')

    if (!(await exists(fileToRemove))) {
        throw new Error('FS operation failed')
    }

    await fs.unlink(fileToRemove);
};

await remove();