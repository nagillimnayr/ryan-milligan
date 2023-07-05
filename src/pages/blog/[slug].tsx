import PageLayout from '@/components/layout/page-layout/PageLayout';
import { type PostData, getAllPostSlugs, getPostData } from '@/lib/md/getPosts';
import { useEffect, useMemo } from 'react';

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import { format, parse } from 'date-fns';

const PostPage = (props: PostData) => {
    return (
        <>
            <PageLayout title={props.title}>
                <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    rehypePlugins={[rehypeRaw, rehypeSanitize]}
                >
                    {props.content}
                </ReactMarkdown>
            </PageLayout>
        </>
    );
};

export default PostPage;

export async function getStaticPaths() {
    const paths = await getAllPostSlugs();
    return {
        paths,
        fallback: false,
    };
}

type Params = {
    params: {
        slug: string;
    };
};
export async function getStaticProps({ params }: Params) {
    const props: PostData = await getPostData(params.slug);

    return {
        props,
    };
}
