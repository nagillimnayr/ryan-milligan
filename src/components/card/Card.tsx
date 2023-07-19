import { cn } from '@/lib/cn';
import Link from 'next/link';

type Props = {
    href: string | URL;
    heading?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
};
const Card = ({ href, heading, description, children, className }: Props) => {
    return (
        <Link
            href={href}
            className={cn(
                'group rounded-lg border  border-slate-900 bg-transparent px-5 py-4 shadow-none shadow-blue-900 transition-all duration-500 hover:scale-110  hover:border-gray-300 hover:bg-gray-100  hover:shadow-lg hover:shadow-blue-900 hover:dark:border-neutral-700  hover:dark:bg-slate-900',
                className
            )}
            target="_blank"
            rel="noopener noreferrer"
        >
            <h2 className={`mb-3 text-2xl font-semibold`}>
                {heading}{' '}
                <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                    -&gt;
                </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                {description}
            </p>
            {children}
        </Link>
    );
};

export { Card };