import { cn } from '@/lib/utils';
import type { LinkProps } from '@/components/props/Props';
import Link from 'next/link';

const NavMenuLink = ({ children, className, href }: LinkProps) => {
    return (
        <button className={className}>
            <Link href={href} className={cn('h-full w-full')}>
                {children}
            </Link>
        </button>
    );
};

export default NavMenuLink;
