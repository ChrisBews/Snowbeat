// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [mdx()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Geist',
            cssVariable: '--font-geist',
            options: {
                variants: [
                    {
                        weight: '100 900',
                        style: 'normal',
                        src: ['./src/assets/fonts/Geist-VariableFont_wght.ttf'],
                    },
                ],
            },
        },
        {
            provider: fontProviders.local(),
            name: 'Work Sans',
            cssVariable: '--font-worksans',
            options: {
                variants: [
                    {
                        weight: '100 900',
                        style: 'normal',
                        src: [
                            './src/assets/fonts/WorkSans-VariableFont_wght.ttf',
                        ],
                    },
                ],
            },
        },
    ],
});
