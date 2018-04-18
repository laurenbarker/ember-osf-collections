module.exports = {
    root: true,
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module',
    },
    extends: '@centerforopenscience/eslint-config/ember',
    plugins: [
        'typescript',
    ],
    env: {
        browser: true,
        es6: true,
    },
    rules: {
        'class-methods-use-this': [ 'error', {
            exceptMethods: [
                'resetController'
            ],
        }],
        'no-undef': 'off',
        'no-unused-vars': ['error', { argsIgnorePattern: '^this' }],
        'typescript/no-unused-vars': 'error',
        strict: 'off',
    },
    overrides: [
        {
            files: ['**/*.d.ts'],
            rules: {
                'no-unused-vars': 'off',
                'indent': 'off',
            }
        },
        {
            files: ['*-test.ts'],
            rules: {
                'no-unused-expressions': 'off',
            }
        }
    ]
};
