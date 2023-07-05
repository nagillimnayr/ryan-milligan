import { orbitron, atkinson_hyperlegible } from './src/lib/fonts';
/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    darkMode: ['class'],
    content: [
        './pages/**/*.{js,ts,jsx,tsx,md,mdx}',
        './components/**/*.{js,ts,jsx,tsx,md,mdx}',
        './app/**/*.{js,ts,jsx,tsx,md,mdx}',
        './src/**/*.{js,ts,jsx,tsx,md,mdx}',
    ],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            fontFamily: {
                sans: [
                    'var(--font-roboto)',
                    'var(--font-atkinson-hyperlegible)',
                ],
                display: ['var(--font-roboto-slab)'],
                mono: ['var(--font-roboto-mono)'],
                roboto: ['var(--font-roboto)'],
                condensed: ['var(--font-roboto-)'],
                flex: ['var(--font-roboto-flex)'],
                slab: ['var(--font-roboto-slab)'],
                orbitron: ['var(--font-orbitron)'],
                iceland: ['var(--font-iceland)'],
                atkinson_hyperlegible: ['var(--font-atkinson-hyperlegible)'],
            },
            colors: {
                border: 'hsl(var(--border) / <alpha-value>)',
                input: 'hsl(var(--input) / <alpha-value>)',
                ring: 'hsl(var(--ring) / <alpha-value> / <alpha-value>)',
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',
                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--primary-foreground) / <alpha-value>)',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--secondary-foreground) / <alpha-value>)',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive) / <alpha-value>)',
                    foreground:
                        'hsl(var(--destructive-foreground) / <alpha-value>)',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent) / <alpha-value>)',
                    foreground: 'hsl(var(--accent-foreground) / <alpha-value>)',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground:
                        'hsl(var(--popover-foreground) / <alpha-value>)',
                },
                card: {
                    DEFAULT: 'hsl(var(--card) / <alpha-value>)',
                    foreground: 'hsl(var(--card-foreground) / <alpha-value>)',
                },
                'button-primary': {
                    DEFAULT: 'hsl(var(--button-primary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--button-primary-foreground) / <alpha-value>)',
                    focus: 'hsl(var(--button-primary-focus) / <alpha-value>)',
                },
                'button-secondary': {
                    DEFAULT: 'hsl(var(--button-secondary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--button-secondary-foreground) / <alpha-value>)',
                    focus: 'hsl(var(--button-secondary-focus) / <alpha-value>)',
                },
                'button-muted': {
                    DEFAULT: 'hsl(var(--button-muted) / <alpha-value>)',
                    foreground:
                        'hsl(var(--button-muted-foreground) / <alpha-value>)',
                    focus: 'hsl(var(--button-muted-focus) / <alpha-value>)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },

            // typography: () => ({
            //     base: {
            //         css: {
            //             '--tw-prose-body': 'var(--)',
            //             '--tw-headings': 'var(--) ',
            //             '--tw-prose-lead': 'var(--)',
            //             '--tw-prose-links': 'var(--)',
            //             '--tw-prose-bold': 'var(--)',
            //             '--tw-prose-counters': 'var(--)',
            //             '--tw-prose-bullets': 'var(--)',
            //             '--tw-prose-hr': 'var(--)',
            //             '--tw-prose-quotes': 'var(--)',
            //             '--tw-prose-quote-borders': 'var(--)',
            //             '--tw-prose-captions': 'var(--)',
            //             '--tw-prose-code': 'var(--)',
            //             '--tw-prose-pre-code': 'var(--)',
            //             '--tw-prose-pre-bg': 'var(--)',
            //             '--tw-prose-th-borders': 'var(--)',
            //             '--tw-prose-td-borders': 'var(--)',
            //             '--tw-prose-invert-body': 'var(--)',
            //             '--tw-prose-invert-headings': 'var(--)',
            //             '--tw-prose-invert-lead': 'var(--)',
            //             '--tw-prose-invert-links': 'var(--)',
            //             '--tw-prose-invert-bold': 'var()',
            //             '--tw-prose-invert-counters': 'var(--)',
            //             '--tw-prose-invert-bullets': 'var(--)',
            //             '--tw-prose-invert-hr': 'var(--)',
            //             '--tw-prose-invert-quotes': 'var(--)',
            //             '--tw-prose-invert-quote-borders': 'var(--)',
            //             '--tw-prose-invert-captions': 'var(--)',
            //             '--tw-prose-invert-code': 'var(--)',
            //             'tw- prose - invert - pre - code': 'var(--) ',
            //             '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            //             '--tw-prose-invert-th-borders': 'var(--)',
            //             '--tw-prose-invert-td-borders': 'var(--)',
            //         },
            //     },
            // }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        require('tailwindcss-animate'),
    ],
} satisfies Config;
