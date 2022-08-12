[![CI](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/main.yml/badge.svg)](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/main.yml)
[![size](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/size.yml/badge.svg)](https://github.com/Wilkins-Software/time-conversion-helpers/actions/workflows/size.yml)

<div style="display: flex;">
  <img src="https://img.shields.io/github/issues/Wilkins-Software/time-conversion-helpers" />
  <img src="https://img.shields.io/github/forks/Wilkins-Software/time-conversion-helpers" />
  <img src="https://img.shields.io/github/stars/Wilkins-Software/time-conversion-helpers" />
  <img src="https://img.shields.io/github/license/Wilkins-Software/time-conversion-helpers" />
</div>

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

## Continuous Integration

### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

## Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

## Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

## Named Exports

Per Palmer Group guidelines, [always use named exports.](https://github.com/palmerhq/typescript#exports) Code split inside your React app instead of your React library.

## Publishing to NPM

We recommend using [np](https://github.com/sindresorhus/np).
