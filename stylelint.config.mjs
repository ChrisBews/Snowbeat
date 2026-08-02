/** @type {import("stylelint").Config} */
export default {
    ignoreFiles: ['dist/**/*'],
    extends: ['stylelint-config-standard', 'stylelint-config-html'],
    rules: {
        "custom-property-empty-line-before": null,
        "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global", "local"] }]
    },
};
