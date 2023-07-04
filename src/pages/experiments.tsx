import Head from 'next/head';
import { type NextPage } from 'next';
import { useMemo } from 'react';

const ExperimentsPage: NextPage = () => {
    const list = useMemo(() => {
        return ['Lorem-Ipsumify', 'Dynamic toggle-switch width'];
    }, []);
    return (
        <>
            <Head>
                <title>Experiments</title>
                <meta name="description" content="" />
                <link
                    rel="icon"
                    type="image/favicon"
                    href="/favicon/lightmode/favicon.svg"
                />
                <link rel="icon" type="favicon" href="/favicon.ico" />
            </Head>
            <div className="prose mx-auto mt-4 flex w-full flex-col items-center justify-start font-sans text-foreground prose-headings:text-foreground">
                <h1>Experiments</h1>

                <ul className="container rounded-lg border border-border bg-muted text-muted-foreground">
                    {list.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default ExperimentsPage;
