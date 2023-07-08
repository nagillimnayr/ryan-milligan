import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';

import z from 'zod';
import { createPath } from '@/lib/fs/createPath';

const RequestSchema = z.object({
    fileName: z.string(),
    contents: z.string(),
});

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const reqData = await RequestSchema.safeParseAsync(req.body);

    if (!reqData.success) {
        console.error('error:', reqData.error);
        return;
    }

    const { fileName, contents } = reqData.data;
    console.log('File name:', fileName);

    // create path to new file
    const pathToNewFile = createPath(fileName);

    // attempt to write to the new file
    fs.writeFile(pathToNewFile, contents)
        .then(() => {
            console.log(`success writing to file (${pathToNewFile}) `);
            res.status(200).json({ message: 'success writing to file' });
        })
        .catch((reason) => {
            console.error(`error writing to file (${pathToNewFile}) `, reason);
            res.status(400).json({ error: reason });
        });
}
