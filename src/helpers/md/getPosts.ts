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
            // read file as string
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = await fs.readFile(fullPath, 'utf8');

            // Remove ".md" from file name to get id
            const slug = fileName.replace(/\.mdx?$/, '');

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
    );

    // sort posts by data
    const allPostDataDefined: PostData[] = allPostsData.filter(
        (postData) => postData.title !== ''
    );

    return allPostDataDefined.sort((a, b) => (a.date < b.date ? 1 : -1));
}

// returns array of objects to be used by getStaticPaths()
export async function getAllPostSlugs() {
    const postsDirectory = path.join(root, 'posts');
    const fileNames = await fs.readdir(postsDirectory);
    return fileNames.map((fileName) => {
        return {
            params: {
                slug: fileName.replace(/\.mdx$/, ''),
            },
        };
    });
}

export async function getPostData(slug: string) {
    // get path to file
    const fullPath = path.join(root, 'posts', `${slug}.mdx`);
    // read file contents
    const fileContents = await fs.readFile(fullPath, 'utf8');

    // parse frontmatter of file
    const { data, content } = matter(fileContents);
    const { title, date } = await frontMatterSchema.parseAsync(data);

    const postData: PostData = {
        slug,
        title,
        date: date.toDateString(),
        content,
    };
    return postData;
}
