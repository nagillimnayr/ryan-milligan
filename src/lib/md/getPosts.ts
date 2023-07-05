import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import z from 'zod';

const frontMatterSchema = z.object({
    title: z.string(),
    date: z.coerce.date(),
});

const root = path.join(process.cwd(), 'src');
export type PostData = {
    slug: string;
    title: string;
    date: string;
    content: string;
};
export async function getSortedPostsData() {
    const postsDirectory = path.join(root, 'posts');
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData: PostData[] = await Promise.all(
        fileNames.map(async (fileName) => {
            // Remove ".md" from file name to get id
            const slug = fileName.replace(/\.mdx?$/, '');

            // read file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = await fs.readFile(fullPath, 'utf8');

            // parse frontmatter of file
            const { data, content } = matter(fileContents);
            const matterResult = await frontMatterSchema.safeParseAsync(data);

            const { title, date } = matterResult.success
                ? matterResult.data
                : { title: '', date: new Date() };

            const post: PostData = {
                slug,
                title,
                date: date.toDateString(),
                content,
            };
            return post;
        })
    ).catch((reason) => {
        console.error(reason);
        throw new Error(reason);
    });

    // sort posts by data
    const allPostDataDefined: PostData[] = allPostsData.filter(
        (postData) => postData.title !== ''
    );

    return allPostDataDefined.sort((a, b) => (a.date < b.date ? 1 : -1));
}
