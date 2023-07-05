import fs, { readdir } from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';

const root = path.join(process.cwd(), 'src');
export type PostData = {
    slug: string;
    data: {
        [key: string]: any;
    };
};
export async function getSortedPostsData() {
    const postsDirectory = path.join(root, 'posts');
    const fileNames = await fs.readdir(postsDirectory);
    const allPostsData = await Promise.all(
        fileNames.map(async (fileName) => {
            // Remove ".md" from file name to get id
            const slug = fileName.replace(/\.mdx?$/, '');

            // read file as string
            const fullPath = path.join(postsDirectory, fileName);
            const contents = await fs.readFile(fullPath, 'utf8');

            // parse frontmatter of file
            const matterResult = matter(contents);

            const post: PostData = {
                slug,
                data: matterResult.data,
            };
            return post;
        })
    );

    // sort posts by data
    //return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
    return allPostsData;
}

export async function getFiles(directory: string) {
    return fs.readdir(path.join(root, 'posts', directory));
}

export async function getPostBySlug(directory: string, slug: string) {
    const source = await fs.readFile(
        path.join(root, 'posts', directory, `${slug}.mdx`)
    );

    const { data, content } = matter(source);

    return {
        frontMatter: data,
        markdownBody: content,
    };
}
