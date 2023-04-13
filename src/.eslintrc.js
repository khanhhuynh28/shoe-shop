module.exports = {
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'import', 'jsx-a11y'],
    rules: {
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn',
        'react/prop-types': 'off',
    },
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        es6: true,
        browser: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};