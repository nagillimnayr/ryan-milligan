import mdx from '@next/mdx';

import remarkRehype from 'remark-rehype';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import remarkToc from 'remark-toc';

// import unocss from '@unocss/webpack';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: {
        // If you use remark-gfm, you'll need to use next.config.mjs
        // as the package is ESM only
        remarkPlugins: [remarkRehype, remarkGfm, remarkToc],
        rehypePlugins: [rehypeSlug],
        // If you use `MDXProvider`, uncomment the following line.
        providerImportSource: '@mdx-js/react',
    },
});

/** @type {import('next').NextConfig} */

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    reactStrictMode: true,
    // webpack: (config) => {
    //     config.plugins.push(unocss());
    //     config.cache = false; // have to be false for hmr
    //     return config;
    // },
};

export default withMDX(nextConfig);
