import fs from 'fs-extra';
import path from 'path';
import matter from 'gray-matter';
import z from 'zod';

const frontMatterSchema = z.object({
    title: z.string(),
    date: z.coerce.date(),
});

// path to root directory
const root = path.join(process.cwd(), 'src');

export type PageData = {
    slug: string;
    title: string;
    date: string;
    content: string;
};

// retrieves data for all files in a directory
export async function getAllPagesFromDir(dirPath: string) {
    // get file names from directory
    const fileNames = await fs.readdir(dirPath);

    // filter out any non .mdx files
    const mdxFileNames = filterMDXFiles(fileNames);

    // get data from files
    const pagesData: PageData[] = await Promise.all(
        mdxFileNames.map(async (fileName) => {
            // read file as string
            const filePath = path.join(dirPath, fileName);
            const fileContents = await fs.readFile(filePath, 'utf8');

            // Remove ".mdx" from file name to get slug
            const slug = getSlugFromMDXFile(fileName);

            // parse MDX file
            const { title, date, content } = await parseMDXFile(fileContents);

            const pageData: PageData = {
                slug,
                title,
                date,
                content,
            };
            return pageData;
        })
    );

    return pagesData;
}

// gets the slugs of all pages in a directory
// returns array of objects to be used by getStaticPaths()
export async function getAllPageSlugsFromDir(dirPath: string) {
    // get file names from directory
    const fileNames = await fs.readdir(dirPath);

    // filter out any non .mdx files
    const mdxFileNames = filterMDXFiles(fileNames);

    return mdxFileNames.map((fileName) => {
        return {
            params: {
                slug: getSlugFromMDXFile(fileName),
            },
        };
    });
}

export async function getPageData(dirPath: string, slug: string) {
    // get path to file
    const pagePath = path.join(dirPath, `${slug}.mdx`);
    // read file contents
    const fileContents = await fs.readFile(pagePath, 'utf8');

    // parse MDX file
    const { title, date, content } = await parseMDXFile(fileContents);

    const pageData: PageData = {
        slug,
        title,
        date,
        content,
    };
    return pageData;
}

async function parseMDXFile(fileContents: string) {
    // parse file with gray-matter to separate front-matter from content
    const { data, content } = matter(fileContents);
    // parse front-matter with zod to validate the schema
    const { title, date } = await frontMatterSchema.parseAsync(data);

    return {
        title,
        date: date.toDateString(),
        content,
    };
}

function filterMDXFiles(fileNames: string[]) {
    // filter out any non '.mdx' files
    const mdxFileNames = fileNames.filter((fileName) => {
        return fileName.match(/\.mdx$/);
    });
    return mdxFileNames;
}

function getSlugFromMDXFile(fileName: string) {
    // Remove ".mdx" from file name to get slug
    const slug = fileName.replace(/\.mdx$/, '');
    return slug;
}
