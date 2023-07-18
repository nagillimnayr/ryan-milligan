import Head from 'next/head';
import { GetStaticProps, InferGetStaticPropsType, type NextPage } from 'next';
import { useMemo } from 'react';
import { PageData, getAllPagesFromDir } from '@/lib/mdx/getPageData';
import PageListItem from '@/components/page-list/PageListItem';
import { cn } from '@/lib/cn';

const icons = {
    calculator: 'i-mdi:calculator',
    : 'i-',
    : 'i-',
    : 'i-',
    : 'i-',
    : 'i-',
    : 'i-',
    : 'i-',
    : 'i-',
    : 'i-',

};

const Page = () => {
    return (
        <>
            <Head>
                <title>Icon Stuff</title>
                <meta name="description" content="" />
                <link
                    rel="icon"
                    type="image/favicon"
                    href="/favicon/lightmode/favicon.svg"
                />
                <link rel="icon" type="favicon" href="/favicon.ico" />
            </Head>

            <section className="prose mx-auto mt-4 flex w-full flex-col items-center justify-start font-sans text-foreground prose-headings:text-foreground">
                <h1 border="b-2">Icon Stuff</h1>
                <div
                    border="2"
                    rounded="lg"
                    className="flex w-full flex-wrap justify-start gap-4 p-4"
                >
                    {icons.map((icon, index) => {
                        return (
                            <div
                                key={index}
                                border="2"
                                rounded="md"
                                className="flex h-fit w-fit flex-col items-center justify-center p-6"
                            >
                                <div className={cn('h-24 w-24', icon)} />
                                <label>{icon}</label>
                            </div>
                        );
                    })}
                </div>
            </section>
        </>
    );
};

export default Page;
