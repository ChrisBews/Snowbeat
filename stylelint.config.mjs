/** @type {import("stylelint").Config} */
export default {
    extends: ['stylelint-config-standard', 'stylelint-config-html'],
    rules: {
        "custom-property-empty-line-before": null,
        "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["global", "local"] }]
    },
};
