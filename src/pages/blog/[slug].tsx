import PageLayout from '@/components/layout/page-layout/PageLayout';

type PostPageProps = {
    title: string;
    slug: string;
    content: string;
};

const PostPage = ({ title, slug, content }: PostPageProps) => {
    return (
        <>
            <PageLayout title={title}>{content}</PageLayout>
        </>
    );
};

export default PostPage;
