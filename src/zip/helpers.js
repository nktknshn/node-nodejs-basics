import path from 'path'

export const getAbsolutePath = (relativePath) => {
    return path.join(
        path.dirname(new URL(import.meta.url).pathname),
        ...relativePath.split(path.sep)
    )
};