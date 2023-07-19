'use client';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { cn } from '@/lib/cn';
import {
    roboto,
    roboto_condensed,
    roboto_flex,
    roboto_mono,
    roboto_serif,
    roboto_slab,
    orbitron,
    iceland,
    atkinson_hyperlegible,
} from '@/lib/fonts';
import { useEffect, useMemo } from 'react';
import { useTheme } from 'next-themes';

const fontVariables = [
    roboto.variable,
    roboto_condensed.variable,
    roboto_flex.variable,
    roboto_mono.variable,
    roboto_serif.variable,
    roboto_slab.variable,
    orbitron.variable,
    iceland.variable,
    atkinson_hyperlegible.variable,
];

type SiteLayoutProps = {
    children: React.ReactNode;
};
export default function SiteLayout({ children }: SiteLayoutProps) {
    const { setTheme, systemTheme } = useTheme();

    // get theme from local storage
    useEffect(() => {
        // get theme from local storage
        let storedTheme = localStorage.getItem('theme');

        if (!storedTheme) {
            // if no theme in local storage, use system theme or light if no system theme
            if (!systemTheme) {
                storedTheme = 'light';
            } else {
                storedTheme = systemTheme;
            }
            // set theme in local storage
            localStorage.setItem('theme', storedTheme);
        }
        // set theme on site
        setTheme(storedTheme);
    }, [setTheme, systemTheme]);

    return (
        <div
            className={cn(
                ...fontVariables,
                'absolute left-0 top-0 m-0 flex min-h-full w-screen flex-col items-stretch p-0'
            )}
        >
            <SiteHeader />
            {children}
            <SiteFooter />
        </div>
    );
}
