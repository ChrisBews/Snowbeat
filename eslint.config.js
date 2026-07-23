import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';

export default [
    ...eslintPluginAstro.configs.recommended,
    eslintConfigPrettier,
    {
        rules: {
            // override/add rules settings here, such as:
            // "astro/no-set-html-directive": "error"
        },
    },
];
