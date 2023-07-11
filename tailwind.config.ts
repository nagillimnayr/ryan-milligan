import { orbitron, atkinson_hyperlegible } from './src/lib/fonts';
import { addDynamicIconSelectors } from '@iconify/tailwind';

/** @type {import('tailwindcss').Config} */
import { type Config } from 'tailwindcss';
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
export default {
    presets: [require('./rm-presets/colors')],
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
                    'var(--font-atkinson-hyperlegible)',
                    'var(--font-roboto)',
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
                'diagonal-bg': {
                    '0%': {
                        'background-position': '0% 50%',
                    },
                    '50%': {
                        'background-position': '100% 50%',
                    },
                    '100%': {
                        'background-position': '0% 50%',
                    },
                },
                ripple: {
                    to: {
                        transform: 'scale(4)',
                        opacity: '0',
                    },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'diagonal-bg': 'diagonal-bg 5s ease infinite',
                ripple: 'ripple 600ms linear',
            },

            typography: () => ({
                DEFAULT: {
                    css: {
                        '--tw-prose-body':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-headings':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-lead':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-links': 'colors.sky[900]',
                        '--tw-prose-bold':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-counters':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-bullets':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-hr':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-quotes':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-quote-borders':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-captions':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-code':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-pre-code':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-pre-bg':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-th-borders':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-td-borders':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-body':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-headings':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-lead':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-links':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-bold':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-counters':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-bullets':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-hr':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-quotes':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-quote-borders':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-captions':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-code':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
                        '--tw-prose-invert-th-borders':
                            'hsl(var(--foreground) / <alpha-value>)',
                        '--tw-prose-invert-td-borders':
                            'hsl(var(--foreground) / <alpha-value>)',
                    },
                },
            }),
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/container-queries'),
        require('tailwindcss-animate'),
        require('@headlessui/tailwindcss'),
        addDynamicIconSelectors(), // iconify plugin
    ],
} satisfies Config;
