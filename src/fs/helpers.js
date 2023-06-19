import { promises as fs } from 'fs';

export const exists = async (path) => {
    try {
        await fs.access(path);
        return true;
    } catch (err) {
        return false;
    }
}

import path from 'path'
import { fileURLToPath } from 'url';

export const getAbsolutePath = (relativePath) => {
    return path.join(
        path.dirname(fileURLToPath(import.meta.url)), 
        ...relativePath.split('/')
    )
};