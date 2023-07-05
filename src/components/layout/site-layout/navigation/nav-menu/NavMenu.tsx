import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import NavMenuLink from './NavMenuLink';
import { cn } from '@/lib/utils';
import Link from 'next/link';

type NavItem = {
    title: string;
    href: string;
    description?: string;
};

const mainNavItems: NavItem[] = [
    {
        title: 'Projects',
        href: '/projects',
    },
    {
        title: 'Experiments',
        href: '/experiments',
    },
    {
        title: 'Posts',
        href: '/posts',
    },
];

const navListItems: NavItem[] = [
    {
        title: 'Alert Dialog',
        href: '/docs/primitives/alert-dialog',
        description:
            'A modal dialog that interrupts the user with important content and expects a response.',
    },
    {
        title: 'Hover Card',
        href: '/docs/primitives/hover-card',
        description:
            'For sighted users to preview content available behind a link.',
    },
    {
        title: 'Progress',
        href: '/docs/primitives/progress',
        description:
            'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
    },
    {
        title: 'Scroll-area',
        href: '/docs/primitives/scroll-area',
        description: 'Visually or semantically separates content.',
    },
    {
        title: 'Tabs',
        href: '/docs/primitives/tabs',
        description:
            'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
    },
    {
        title: 'Tooltip',
        href: '/docs/primitives/tooltip',
        description:
            'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
    },
];

type NavMenuProps = {
    className?: string;
};
const NavMenu = ({ className }: NavMenuProps) => {
    return (
        <NavigationMenu className={cn('font-display font-semibold', className)}>
            <NavigationMenuList className="border-2 ">
                <NavigationMenuItem>
                    <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
                    <NavigationMenuContent className="w-full">
                        <NavMenuLink href="/projects">Projects</NavMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>Experiments</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <NavMenuLink href="/experiments">
                            Experiments
                        </NavMenuLink>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavMenuLink href="/posts">Posts</NavMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavigationMenuTrigger>List</NavigationMenuTrigger>
                    <NavigationMenuContent>
                        <ul>
                            {navListItems.map((item) => {
                                return (
                                    <li key={item.title}>
                                        <NavMenuLink href={item.href}>
                                            {item.title}
                                        </NavMenuLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                    <NavMenuLink href="/contact">Contact</NavMenuLink>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default NavMenu;
