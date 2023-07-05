import {
    roboto,
    roboto_condensed,
    roboto_flex,
    roboto_mono,
    roboto_serif,
    roboto_slab,
} from '@/lib/fonts';
import { cn } from '@/lib/utils';
import PageHeader from './PageHeader';

type PageLayoutProps = {
    children?: React.ReactNode;
    title: string;
    subtitle?: string;
    className?: string;
};
export default function PageLayout({
    children,
    title,
    subtitle,
    className,
}: PageLayoutProps) {
    return (
        <section
            className={cn(
                'container prose prose-invert mt-8 flex h-fit min-h-screen w-full flex-col justify-start font-sans text-foreground',
                className
            )}
        >
            <PageHeader title={title} subtitle={subtitle} />
            {children}
        </section>
    );
}
