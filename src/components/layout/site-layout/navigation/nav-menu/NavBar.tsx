import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const links = [
    { href: '/projects', label: 'Projects' },
    { href: '/experiments', label: 'Experiments' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
];

const Navbar = () => {
    return (
        <Menu as="div" className={'relative ml-auto flex flex-row'}>
            <Menu.Button className={' rounded-md border-2 p-2 font-sans'}>
                Options
            </Menu.Button>
            <Menu.Items
                className={
                    'dropdown-center flex w-fit min-w-fit  flex-col justify-start whitespace-nowrap rounded-md border-2'
                }
            >
                {links.map(({ href, label }) => {
                    return (
                        /* Use the `active` state to conditionally style the active item.*/
                        <Menu.Item key={href} as={Fragment}>
                            <Link
                                href={href}
                                className={
                                    'bg-background px-2 font-sans text-foreground ui-active:bg-indigo-400 ui-active:text-white'
                                }
                            >
                                {label}
                            </Link>
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default Navbar;
