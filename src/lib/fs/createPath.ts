import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';

export function createPath(fileName: string) {
    const __filename = fileURLToPath(import.meta.url);
    console.log('__fileName:', __filename);
    const __dirname = path.dirname(__filename);
    console.log('__dirname:', __dirname);
    const pathToNewFile = path.resolve(
        __dirname,
        path.join('recordedData', `${fileName}`)
    );
    console.log('pathToNewFile:', pathToNewFile);
    return pathToNewFile;
}
