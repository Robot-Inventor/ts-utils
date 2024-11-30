import { eslintConfig } from "@robot-inventor/eslint-config";

export default [
    ...eslintConfig,
    {
        ignores: [
            "**/*.test.ts",
            "**/*.typetest.ts"
        ]
    }
];
