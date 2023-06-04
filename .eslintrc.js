// .eslintrc.js example
module.exports = {
    env: {
        browser: true,
        es2021: true,
        jest: true
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
};
