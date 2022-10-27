# eslint-config-ahd

[![npm version](https://img.shields.io/npm/v/@ahdcreative/eslint-config-ahdv2.svg)]

This package provides AHD Creative's .eslintrc as an extensible shared config.

## Usage

We export three ESLint configurations for your usage.

### eslint-config-ahd

Our default export contains most of our ESLint rules, including ECMAScript 6+ and React. It requires `eslint`, `eslint-plugin-import`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, and `eslint-plugin-jsx-a11y`. Note that it does not enable our React Hooks rules. To enable those, see the [`eslint-config-ahd/hooks` section](#eslint-config-airbnbhooks).

If you don't need React, see [eslint-config-ahd-base](https://www.npmjs.com/package/@ahdcreative/eslint-config-ahd-base).

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@ahdcreative/eslint-config-ahdv2@latest" peerDependencies
  ```

If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @ahdcreative/eslint-config-ahdv2
  ```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "@ahdcreative/eslint-config-ahdv2@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.

If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@ahdcreative/eslint-config-ahdv2;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

Which produces and runs a command like:

  ```sh
  npm install --save-dev @ahdcreative/eslint-config-ahdv2 eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @ahdcreative/eslint-config-ahdv2
  ```
The cli will produce and run a command like:

  ```sh
  npm install --save-dev @ahdcreative/eslint-config-ahdv2 eslint@^#.#.# eslint-plugin-jsx-a11y@^#.#.# eslint-plugin-import@^#.#.# eslint-plugin-react@^#.#.# eslint-plugin-react-hooks@^#.#.#
  ```

2. Add `"extends": "@ahdcreative/eslint-config-ahdv2"` to your `.eslintrc`

### eslint-config-ahd/hooks

This entry point enables the linting rules for React hooks (requires v16.8+). To use, add `"extends": ["@ahdcreative/eslint-config-ahdv2", "@ahdcreative/eslint-config-ahdv2/hooks"]` to your `.eslintrc`.

### eslint-config-ahd/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/ahdcreative/javascript/blob/master/packages/eslint-config-ahd/whitespace.js).

### eslint-config-ahd/base

This entry point is deprecated. See [eslint-config-ahd-base](https://www.npmjs.com/package/@ahdcreative/eslint-config-ahd-base).

### eslint-config-ahd/legacy

This entry point is deprecated. See [eslint-config-ahd-base](https://www.npmjs.com/package/@ahdcreative/eslint-config-ahd-base).

See [AHDCreative's JavaScript styleguide](https://github.com/ahdcreative/javascript) and
the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files)
for more information.

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.