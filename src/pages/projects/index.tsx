import Head from 'next/head';
import { type NextPage } from 'next';
import PageLayout from '@/components/layout/page-layout/PageLayout';

const ProjectsPage: NextPage = () => {
    return (
        <>
            {/* <Head>
      <title>Projects</title>
      <meta name="description" content="" />
      <link
        rel="icon"
        type="image/favicon"
        href="/favicon.ico"
        />
    </Head> */}
            <PageLayout title="Projects"></PageLayout>
        </>
    );
};

export default ProjectsPage;
