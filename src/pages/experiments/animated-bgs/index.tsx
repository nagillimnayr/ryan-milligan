import PageLayout from '@/components/layout/page-layout/PageLayout';
import { type NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
    return (
        <>
            <PageLayout title="Animated Backgrounds">
                <ul>
                    <ListItem
                        id="gradient"
                        title="Animated Gradient"
                        href="https://www.sliderrevolution.com/resources/css-animated-background/"
                    >
                        <div className="bg-anim-diagonal h-96 w-full border-2 bg-gradient-to-br from-sky-500 to-red-500 "></div>
                        <desc>
                            Re-implemented this animated gradient background
                            with Tailwind
                        </desc>
                    </ListItem>
                </ul>
            </PageLayout>
        </>
    );
};

type ListItemProps = {
    id: string;
    title: string;
    href: string;
    children: React.ReactNode;
};
const ListItem = ({ id, title, href, children }: ListItemProps) => {
    return (
        <li key={id}>
            <section className="flex-start container flex flex-col">
                <header className="border-b-2">
                    <h3>{title}</h3>
                    <Link href={href}>{href}</Link>
                </header>
                {children}
            </section>
        </li>
    );
};

export default Page;
