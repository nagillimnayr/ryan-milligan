import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/cn';
import NavDropdownMenu from './NavDropdownMenu';
import NavMenuLink from './NavMenuLink';
import { ClassNameProp } from '@/components/props/Props';

const mainLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/experiments', label: 'Experiments' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const otherLinks = [
    { href: '/other', label: 'Other' },
    { href: '/misc', label: 'Misc' },
    { href: '/etc', label: 'Etc.' },
    { href: '/form', label: 'Form Test' },
    { href: '/ui', label: 'UI Components' },
];

const btnStyle = `rounded-md border-0 py-2 px-4 font-sans h-full hover:bg-foreground/10 ui-open:bg-foreground/10`;

const Navbar = ({ className }: ClassNameProp) => {
    return (
        <nav
            className={cn(
                'relative ml-auto flex h-fit w-fit flex-row items-center justify-start gap-0 rounded-md border-2 p-1',
                className
            )}
        >
            {mainLinks.map(({ href, label }) => {
                return (
                    <NavMenuLink key={href} href={href} className={btnStyle}>
                        {label}
                    </NavMenuLink>
                );
            })}

            <NavDropdownMenu links={otherLinks} className={btnStyle}>
                <div className="inline-flex gap-3">Other</div>
            </NavDropdownMenu>
        </nav>
    );
};

export default Navbar;
