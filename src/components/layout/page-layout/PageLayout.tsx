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
        <div className="container prose prose-invert flex h-fit min-h-screen w-full flex-col justify-start pt-8 font-sans text-foreground">
            <PageHeader title={title} subtitle={subtitle} />
            <main
                className={
                    (cn(
                        'container flex h-fit min-h-screen w-full flex-col items-center justify-start'
                    ),
                    className)
                }
            >
                {children}
            </main>
        </div>
    );
}
