import { promises as fs } from 'fs';

export const exists = async (path) => {
    try {
        await fs.stat(path);
        return true;
    } catch (err) {
        return false;
    }
}
