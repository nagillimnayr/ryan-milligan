import { Menu } from '@headlessui/react';
import { Fragment } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
];

const NavMenu = () => {
    return (
        <Menu as="div" className={'relative ml-auto flex flex-row'}>
            <Menu.Button className={' rounded-md border-2 p-2 font-sans'}>
                Options
            </Menu.Button>
            <Menu.Items
                className={
                    'absolute top-full flex origin-top flex-col justify-start'
                }
            >
                {links.map(({ href, label }) => {
                    return (
                        /* Use the `active` state to conditionally style the active item.*/
                        <Menu.Item key={href} as={Fragment}>
                            {({ active }) => {
                                return (
                                    <Link
                                        href={href}
                                        className={cn(
                                            'bg-white px-2 font-sans text-black',
                                            {
                                                'bg-indigo-400 text-white ':
                                                    active,
                                            }
                                        )}
                                    >
                                        {label}
                                    </Link>
                                );
                            }}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    );
};

export default NavMenu;
