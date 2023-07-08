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
