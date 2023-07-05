import PageLayout from '@/components/layout/page-layout/PageLayout';
import { NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
    return (
        <>
            <PageLayout title="Animated Backgrounds">
                <ul>
                    <ListItem
                        key="gradient"
                        title="Animated Gradient"
                        href="https://www.sliderrevolution.com/resources/css-animated-background/"
                    >
                        <div className="bg-anim-gradient h-96 w-full"></div>
                    </ListItem>
                </ul>
            </PageLayout>
        </>
    );
};

export default Page;

type ListItemProps = {
    key: string;
    title: string;
    href: string;
    children: React.ReactNode;
};
const ListItem = ({ key, title, href, children }: ListItemProps) => {
    return (
        <li key={key}>
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
