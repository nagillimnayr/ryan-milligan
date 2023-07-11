/** @type {import('tailwindcss').Config} */
import colors from 'tailwindcss/colors';
import defaultTheme from 'tailwindcss/defaultTheme';
module.exports = {
    theme: {
        extend: {
            colors: {
                cerulean: {
                    '50': '#eff9ff',
                    '100': '#dff3ff',
                    '200': '#b8e9ff',
                    '300': '#78d8ff',
                    '400': '#31c5ff',
                    '500': '#06aef1',
                    '600': '#008bce',
                    '700': '#006fa7',
                    '800': '#025d8a',
                    '900': '#084e72',
                    '950': '#06314b',
                },

                amethyst: {
                    '50': '#f6f3ff',
                    '100': '#efe9fe',
                    '200': '#e2d7fd',
                    '300': '#cdb7fb',
                    '400': '#b48ef7',
                    '500': '#9a5af2',
                    '600': '#913ee9',
                    '700': '#822cd5',
                    '800': '#6d24b3',
                    '900': '#5a2092',
                    '950': '#381263',
                },

                'electric-violet': {
                    '50': '#fbf4ff',
                    '100': '#f5e5ff',
                    '200': '#edd0ff',
                    '300': '#e0acff',
                    '400': '#cd76ff',
                    '500': '#b942ff',
                    '600': '#ae2cff',
                    '700': '#920ee2',
                    '800': '#7b12b7',
                    '900': '#651093',
                    '950': '#46006f',
                },
            },
        },
    },
};
