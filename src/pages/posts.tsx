import PageLayout from '@/components/layout/page-layout/PageLayout';
import { type PostData, getSortedPostsData } from '@/lib/md/getPosts';
import Link from 'next/link';

type PostsProps = {
    postsData: PostData[];
    title: string;
    description: string;
};

export async function getStaticProps() {
    const postsData = await getSortedPostsData();

    const props: PostsProps = {
        postsData,
        title: 'Posts',
        description: 'Lorem ipsum dolor sit amet',
    };
    return { props };
}

const PostsPage = ({ postsData, title, description }: PostsProps) => {
    return (
        <PageLayout title={'Posts'}>
            <div>
                <ul>
                    {postsData.map(({ slug }) => {
                        return (
                            <li key={slug}>
                                <Link href={`/blog/${slug}`}>{slug}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </PageLayout>
    );
};

export default PostsPage;
