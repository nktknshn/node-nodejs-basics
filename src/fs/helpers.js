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

export const getAbsolutePath = (relativePath) => {
    return path.join(
        path.dirname(new URL(import.meta.url).pathname), 
        ...relativePath.split(path.sep)
    )
};