import path from 'path'
import { fileURLToPath } from 'url';

export const getAbsolutePath = (relativePath) => {
    return path.join(
        path.dirname(fileURLToPath(import.meta.url)), 
        ...relativePath.split('/')
    )
};