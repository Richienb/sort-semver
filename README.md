# Sort Semver [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sort-semver/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sort-semver)

Sort semver-compatible versions.

[![NPM Badge](https://nodei.co/npm/sort-semver.png)](https://npmjs.com/package/sort-semver)

## Install

```sh
npm install sort-semver
```

## Usage

```js
const sortSemver = require("sort-semver");

sortSemver(["v1", "0.0", " v2a "]);
//=> [ '2.0.0', '1.0.0', '0.0.0' ]
```

## API

### sortSemver(versions)

#### versions

Type: `array`

The versions to sort.
