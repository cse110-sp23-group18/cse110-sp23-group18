// .eslintrc.js example
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true,
    },
    plugins: ['prettier'],
    extends: ['airbnb', 'prettier', 'plugin:node/recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'prettier/prettier': 'error',
        'no-unused-vars': 'warn',
        'no-console': 'off',
        'func-names': 'off',
        'no-process-exit': 'off',
        'object-shorthand': 'off',
        'class-methods-use-this': 'off',
    },
    overrides: [
        {
            files: ['**/*.test.js'],
            env: {
                jest: true,
            },
        },
    ],
    globals: {
        page: "readonly" // Duct-tape fix to prevent linting error on jest-puppeteer test files
    }
};
