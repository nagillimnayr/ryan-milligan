import Head from 'next/head';

type PageHeaderProps = {
    children?: string;
    title: string;
    subtitle?: string;
};
const PageHeader = ({ children, title, subtitle }: PageHeaderProps) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <header className="prose prose-invert">
                <h1>{title}</h1>
                {subtitle ? <h3>{subtitle}</h3> : null}
                <p>{children}</p>
            </header>
        </>
    );
};

export default PageHeader;
