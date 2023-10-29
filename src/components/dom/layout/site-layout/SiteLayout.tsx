'use client';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import { cn } from '@/helpers/cn';
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
} from '@/helpers/fonts';
import { useEffect, useMemo, useRef } from 'react';
import { useTheme } from 'next-themes';
import Scene from '@/components/canvas/scene/Scene';

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

  const ref = useRef<HTMLDivElement>(null!);

  return (
    <div
    ref={ref}
      className={cn(
        ...fontVariables,
        'absolute left-0 top-0 m-0 flex h-full w-full flex-col items-stretch p-0'
      )}
    >
      <SiteHeader />
      {children}
      <Scene style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          pointerEvents: 'none',
        }} 
        eventSource={ref}
        eventPrefix='client'
        />
      <SiteFooter />
      
    </div>
  );
}
