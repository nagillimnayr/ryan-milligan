import { presetRadixUi } from 'unocss-preset-primitives';
import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetTypography,
    presetUno,
    presetWebFonts,
    transformerDirectives,
} from 'unocss';
import transformerAttributifyJsx from '@unocss/transformer-attributify-jsx-babel';

import transformerVariantGroup from '@unocss/transformer-variant-group';

export default defineConfig({
    shortcuts: [
        // ...
    ],
    theme: {
        colors: {
            // ...
        },
    },
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            // Optional
            extraProperties: {
                display: 'inline-block',
                'vertical-align': 'middle',
            },
            collections: {
                'line-md': () =>
                    import('@iconify-json/line-md/icons.json').then(
                        (icons) => icons.default
                    ),
                material: () =>
                    import('@iconify-json/material-symbols/icons.json').then(
                        (icons) => icons.default
                    ),
                tabler: () =>
                    import('@iconify-json/tabler/icons.json').then(
                        (icons) => icons.default
                    ),
                lucide: () =>
                    import('@iconify-json/lucide/icons.json').then(
                        (icons) => icons.default
                    ),
                iconoir: () =>
                    import('@iconify-json/iconoir/icons.json').then(
                        (icons) => icons.default
                    ),
                ion: () =>
                    import('@iconify-json/ion/icons.json').then(
                        (icons) => icons.default
                    ),
                carbon: () =>
                    import('@iconify-json/carbon/icons.json').then(
                        (icons) => icons.default
                    ),
                streamline: () =>
                    import('@iconify-json/streamline/icons.json').then(
                        (icons) => icons.default
                    ),
                arcticons: () =>
                    import('@iconify-json/arcticons/icons.json').then(
                        (icons) => icons.default
                    ),
                wi: () =>
                    import('@iconify-json/wi/icons.json').then(
                        (icons) => icons.default
                    ),
                spinners: () =>
                    import('@iconify-json/svg-spinners/icons.json').then(
                        (icons) => icons.default
                    ),

                eos: () =>
                    import('@iconify-json/eos-icons/icons.json').then(
                        (icons) => icons.default
                    ),
            },
        }),
        presetTypography(),
        presetWebFonts({
            fonts: {
                // ...
            },
        }),
        presetRadixUi(),
    ],
    transformers: [
        transformerDirectives(),
        transformerAttributifyJsx(),
        transformerVariantGroup(),
    ],
});
