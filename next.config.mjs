import mdx from '@next/mdx';

import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        remarkPlugins: [remarkGfm],
        rehypePlugins: [rehypeSlug],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: '@mdx-js/react',
    },
});

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
};

export default withMDX(nextConfig);
