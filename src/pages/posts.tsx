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
        <section>
            <header>
                <h1>{title}</h1>
                <p>{description}</p>
            </header>
            <div>
                <ul>
                    {postsData.map(({ slug, data }) => {
                        return (
                            <li key={slug}>
                                <Link href={`/posts/${slug}`}>{slug}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </section>
    );
};

export default PostsPage;
