import PageLayout from '@/components/layout/page-layout/PageLayout';
import { type NextPage } from 'next';
import Link from 'next/link';

const Page: NextPage = () => {
    return (
        <>
            <section>
                <ul className="">
                    <ListItem
                        id="gradient"
                        title="Animated Gradient"
                        href="https://www.sliderrevolution.com/resources/css-animated-background/"
                        description="Re-implemented this animated gradient background
                            with Tailwind."
                    >
                        <div className="bg-anim-diagonal h-96 w-full border-2 bg-gradient-to-br from-sky-500 to-red-500 "></div>
                    </ListItem>
                </ul>
            </section>
        </>
    );
};

type ListItemProps = {
    id: string;
    title: string;
    href: string;
    children: React.ReactNode;
    description?: string;
};
const ListItem = ({
    id,
    title,
    href,
    description,
    children,
}: ListItemProps) => {
    return (
        <li key={id}>
            <section className="flex-start container flex flex-col border-b-2">
                <header className="mb-1">
                    <h3 className="mb-0 border-b-2">{title}</h3>
                    <Link href={href}>{href}</Link>
                </header>
                {children}
                {description ? (
                    <desc className="my-1">{description}</desc>
                ) : null}
            </section>
        </li>
    );
};

export default Page;
