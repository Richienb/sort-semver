# Sort Versions [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/sort-versions/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/sort-versions)

Sort semver-compatible versions.

[![NPM Badge](https://nodei.co/npm/sort-versions.png)](https://npmjs.com/package/sort-versions)

## Install

```sh
npm install sort-versions
```

## Usage

```js
const sortVersions = require("sort-versions");

sortVersions(["v1", "0.0", " v2a "]);
//=> [ '2.0.0', '1.0.0', '0.0.0' ]
```

## API

### sortVersions(versions)

#### versions

Type: `array`

The versions to sort.
