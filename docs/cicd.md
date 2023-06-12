# CI/CD Setup

## Steps to setup

1. Clone the repository
2. run `npm install --save-dev`
3. To run linting, run `npm run lint`
4. To run testing, run `npm run test or npm test`

## CI/CD Pipeline

The CI part of the pipeline consists of a few things

-   ESLint
-   Stylelint
-   CodeQL
-   Jest and Puppeteer testing
-   Codacy

The CD part of the pipeline consists of two things

-   Automatic deployment via Netlify
-   JSDocs generation to Github Pages

## Continuous Integration

### ESLint

For ESLint we have setup ESLint in conjuction with Prettier and AirBnb rules.

Everything can be setup with the following steps:

-   Install everything with `npm install eslint prettier eslint-plugin-prettier eslint-config-prettier eslint-plugin-node eslint-config-node --save-dev`
-   Install peer dependencies with `npx install-peerdeps --save-dev eslint-config-airbnb`
-   Create a `.prettierrc.js` or a `.prettierrc.json` file for Prettier configuration. For a .js file, it should look like the below.

```js
module.exports = {
    trailingComma: 'es5',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
};
```

-   Create a `.eslintrc.js` or a `.eslintrc.json` file for ESLint configuration. For a .js file, it should look like the example below:

```js
module.exports = {
    env: {
        browser: true,
        es2021: true,
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
    },
};
```

-   The `.eslintrc.js` file we have in the repo is slightly different due to the inclusion of Jest. Reference that file for the configuration that works best for this project.
-   To run `eslint`, run `npx eslint <source_path>` to display all warnings and errors, and run `npx eslint <source_path> --fix` to fix all automatically fixable warnings and errors. You can include this in your `package.json` script as we did.

### Stylelint

Stylelint is used to ensure mainly that CSS code is styled correctly. We use Stylelint in conjunction with Prettier. Stylelint can be installed via `npm i stylelint stylelint-prettier --save-dev`. Make sure to include a `.stylelintrc.js` or a `.stylelintrc.json` file. For a .js file, an example can be found below:

```js
module.exports = {
    plugins: ['stylelint-prettier'],
    rules: {
        'prettier/prettier': true,
    },
};
```

Stylelint can be run with `npx stylelint <source_path> --fix` (with the added `--fix` flag) to display all warnings and to fix automatically fixable styling issues. This, again, can be included in the `package.json` scripts.

### CodeQL

CodeQL checks for vulnerabilities in a code and ensures that the quality of your code is up to standards with known bugs and issues. CodeQL can be set up via Github Actions to detect for issues upon a push and once every set time (daily, weekly, etc.). This way, CodeQL will detect issues not only with any code you update, but also updated code of libraries or packages that you depend on that could cause a vulnerability issue.

### Jest and Puppeteer

We run unit tests and end-to-end tests both with Jest. In this repo, the unit tests test each frame's individual js component using Jest with a Babel preset environment, while the end-to-end tests use Jest in tangent with Puppeteer to ensure that the integration of all components works as expected.

To get everything installed, run `npm install --save-dev jest babel-jest @babel/core @babel/preset-env puppeteer jest-puppeteer`. If this doesn't work, add the following parts into the appropriate places in `package.json` and run `npm install`.

```json
{
    "devDependencies": {
        "@babel/core": "^7.16.0",
        "@babel/preset-env": "^7.16.0",
        "babel-jest": "^27.3.1",
        "jest": "^27.3.1",
        "jest-puppeteer": "^6.0.0",
        "puppeteer": "^11.0.0"
    },
    "scripts": {
        "test": "jest"
    },
    "jest": {
        "preset": "jest-puppeteer",
        "verbose": true
    }
}
```

Regardless of if you needed to manually set the dependencies in `package.json` or not, make sure to add the `script` and `jest` portions to your file to make sure that all tests can be run with `npm run test` or `npm test` and that your Jest is configured correctly.

### Github Actions

We use Github Actions to run our CI pipeline every single time a PR is made or `dev` and/or `prod` are pushed to. To do so, we have a `code-ci.yml` file in out `.github/workflows` directory that contains the procedures to install and run necessary tools for ESLint, Stylelint, CodeQL and Jest. ESLint and Stylelint are manually setup by using the commands to run each respective linting (using `npx`). CodeQL is run using Github's preset actions library from `github/codeql-action`, the details of which can be found in our `code-ci.yml` file. Jest is set up to run like normal except that because our Github actions runs in a virtual Linux environment that does not necessarily have a screen attached to it, we use `xvfb` to run our Jest and Puppeteer tests.

### Codacy

Codacy is an external tool that we use that bundles up a lot of quality services together and analyzes your repo before then grading it with letter grades. If you have ESLint or Stylelint already setup in your repo, Codacy will detect that and use your presets and configuration to evaluate the quality of your code.

## Continuous Deployment/Delivery

### Netlify

Netlify is a service that offers automatic deployment from branches and pull requests. Not only does this allow for deployment previews from people trying to make a pull request to merge code to see what the code being merged in looks like, it also allows for a link to the deployment that updates as soon as new code is pushed to the repo.

### JSDocs

JSDocs automatically generates developer documentation based on the comments written in the code itself. We have a file called `docs-gh-pages.yml` in our `.github/workflows` directory that runs JSDocs services every time code is pushed to `prod` or `dev` to our Github pages. This way, developers can access the documentation on JSDocs (complete with ease of navigation and a fresh look) to determine what certain functions do.

To install JSDocs, run `npm install --save-dev jsdoc`. Having a `jsdoc.json` file will allow for configuration for your JSDocs. An example of ours can be found below:

```json
{
    "opts": {
        "readme": "./README.md",
        "template": "node_modules/docdash"
    },
    "plugins": ["plugins/markdown"],
    "docdash": {
        "static": true,
        "sort": true,
        "search": true,
        "collapse": true,
        "typedefs": true,
        "removeQuotes": "none",
        "scripts": [],
        "menu": {
            "Github repo": {
                "href": "https://github.com/cse110-sp23-group18/cse110-sp23-group18",
                "target": "_blank",
                "class": "menu-item",
                "id": "repository"
            }
        }
    },
    "templates": {
        "default": {
            "useLongnameInNav": true
        }
    }
}
```

To run JSDocs, you can run `jsdoc -a all -c <config_file_path> -r <source_path> -d <output_location> --verbose`. This will allow you to generate docs and put them into a file. To learn how to enhance your JSDocs and add templates, more information can be found [here](https://www.npmjs.com/package/jsdoc).

## FAQ and Troubleshoot

### Running jest tests isn't working for me! It keeps erroring me out

Try to delete your entire `node_modules` directory and reinstall with `npm install --save-dev`. This should reset all packages and ensure that it works.
