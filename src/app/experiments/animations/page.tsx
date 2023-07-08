import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType, type NextPage } from 'next';
import { useMemo } from 'react';
import { PageData, getAllPagesFromDir } from '@/lib/mdx/getPageData';
import PageListItem from '@/components/page-list/PageListItem';

type IndexProps = {
    pages: PageData[];
};

const AnimationsPage = ({
    pages,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
    return (
        <>
            {/* <Head>
                <title>Experiments</title>
                <meta name="description" content="" />
                <link
                    rel="icon"
                    type="image/favicon"
                    href="/favicon/lightmode/favicon.svg"
                />
                <link rel="icon" type="favicon" href="/favicon.ico" />
            </Head> */}
            <div className="prose mx-auto mt-4 flex w-full flex-col items-center justify-start font-sans text-foreground prose-headings:text-foreground">
                <h1>Experiments</h1>

                <ul className="container rounded-lg border border-border bg-muted text-muted-foreground">
                    {pages.map((page) => (
                        <PageListItem
                            key={page.slug}
                            pageData={page}
                            href={`/experiments/animations/${page.slug}`}
                        />
                    ))}
                </ul>
            </div>
        </>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    // get data from all '.mdx' pages in the current working directory
    const pages: PageData[] = await getAllPagesFromDir(process.cwd());

    return {
        props: {
            pages,
        },
    };
};

export default AnimationsPage;
