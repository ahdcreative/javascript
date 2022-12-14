# eslint-config-ahd-base <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![npm version](https://img.shields.io/npm/v/@ahdcreative/eslint-config-ahd-base.svg)][package-url]

[![github actions][actions-image]][actions-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

This package provides AHDCreative's base JS .eslintrc (without React plugins) as an extensible shared config.

## Usage

We export two ESLint configurations for your usage.

### eslint-config-ahd-base

Our default export contains all of our ESLint rules, including ECMAScript 6+. It requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@ahdcreative/eslint-config-ahd-base@latest" peerDependencies
  ```

If using **npm 5+**, use this shortcut

  ```sh
  npx install-peerdeps --dev @ahdcreative/eslint-config-ahd-base
  ```

If using **yarn**, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly.
Otherwise, run `npm info "@ahdcreative/eslint-config-ahd-base@latest" peerDependencies` to list the peer dependencies and versions, then run `yarn add --dev <dependency>@<version>` for each listed peer dependency.


If using **npm < 5**, Linux/OSX users can run

  ```sh
  (
    export PKG=@ahdcreative/eslint-config-ahd-base;
    npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
  )
  ```

Which produces and runs a command like:

  ```sh
    npm install --save-dev @ahdcreative/eslint-config-ahd-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

If using **npm < 5**, Windows users can either install all the peer dependencies manually, or use the [install-peerdeps](https://github.com/nathanhleung/install-peerdeps) cli tool.

  ```sh
  npm install -g install-peerdeps
  install-peerdeps --dev @ahdcreative/eslint-config-ahd-base
  ```

The cli will produce and run a command like:

  ```sh
  npm install --save-dev @ahdcreative/eslint-config-ahd-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "ahd-base"` to your .eslintrc.

### eslint-config-ahd-base/legacy

Lints ES5 and below. Requires `eslint` and `eslint-plugin-import`.

1. Install the correct versions of each package, which are listed by the command:

  ```sh
  npm info "@ahdcreative/eslint-config-ahd-base@latest" peerDependencies
  ```

Linux/OSX users can run
  ```sh
  (
    export PKG=@ahdcreative/eslint-config-ahd-base;
    npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG"
  )
  ```

Which produces and runs a command like:

  ```sh
  npm install --save-dev @ahdcreative/eslint-config-ahd-base eslint@^#.#.# eslint-plugin-import@^#.#.#
  ```

2. Add `"extends": "ahd-base/legacy"` to your .eslintrc

See [AHDCreative's overarching ESLint config](https://npmjs.com/@ahdcreative/eslint-config-ahd-base), [AHDCreative's JavaScript styleguide](https://github.com/ahdcreative/javascript), and the [ESlint config docs](https://eslint.org/docs/user-guide/configuring#extending-configuration-files) for more information.

### eslint-config-ahd-base/whitespace

This entry point only errors on whitespace rules and sets all other rules to warnings. View the list of whitespace rules [here](https://github.com/ahdcreative/javascript/blob/master/packages/eslint-config-ahd-base/whitespace.js).

## Improving this config

Consider adding test cases if you're making complicated rules changes, like anything involving regexes. Perhaps in a distant future, we could use literate programming to structure our README as test cases for our .eslintrc?

You can run tests with `npm test`.

You can make sure this module lints with itself using `npm run lint`.

[package-url]: https://npmjs.org/package/@ahdcreative/eslint-config-ahd-base
[npm-version-svg]: https://versionbadg.es/ahdcreative/javascript.svg
[license-image]: https://img.shields.io/npm/l/@ahdcreative/eslint-config-ahd-base.svg
[license-url]: LICENSE.md
[downloads-image]: https://img.shields.io/npm/dm/@ahdcreative/eslint-config-ahd-base.svg
[downloads-url]: https://npm-stat.com/charts.html?package=@ahdcreative/eslint-config-ahd-base
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/ahdcreative/javascript
[actions-url]: https://github.com/ahdcreative/javascript/actions
