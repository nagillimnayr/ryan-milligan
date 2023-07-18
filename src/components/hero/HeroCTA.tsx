import { type URL } from 'url';
import { Button, type ButtonProps } from '../ui/button';
import Link from 'next/link';
import RippleEffect from '../gui/RippleEffect';

interface HeroCTAProps extends ButtonProps {
    href: string | URL;
}
export default function HeroCTA(props: HeroCTAProps) {
    return (
        <Button
            // asChild
            variant={props.variant}
            className={props.className}
            onClick={props.onClick}
        >
            <Link href={props.href}>{props.children}</Link>
        </Button>
    );
}
