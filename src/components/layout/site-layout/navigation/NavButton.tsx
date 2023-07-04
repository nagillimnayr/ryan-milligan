import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { capitalize } from 'lodash';
import Link from 'next/link';

type NavButtonProps = {
    children?: string;
    href: string;
    className?: string;
};
const NavButton = (props: NavButtonProps) => {
    return (
        <Button
            asChild
            variant={'link'}
            className={cn(
                `flex h-full w-full items-center justify-center rounded-none text-xl hover:bg-muted/50`,
                props.className
            )}
        >
            <Link href={props.href}>
                {capitalize(props.children ?? props.href)}
            </Link>
        </Button>
    );
};

export default NavButton;
