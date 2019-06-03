# ♻ Recursive Entries

[![bundle size](https://img.shields.io/bundlephobia/min/recursive-entries.svg)][npmpkg]
[![npm downloads](https://img.shields.io/npm/dt/recursive-entries.svg)][npmpkg]

## Installation
`npm i recursive-entries`

## Usage
`const {recursiveEntries, valueFromPath} = require('recursive-entries');`
> Pro-tip 💡: Utilize the [test file](test.js) as an example

## Documentation
### `recursiveEntries(obj)`
* where `obj` is any vanilla object
* returns an array of length 2 arrays, where the first item is an array of keys leading to the value and the second item is the value found at the end of the path; for example, `[ [["path", "to"], "value"], ... ]`
### `valueFromPath(obj, path)`
* where `obj` is any vanilla object
* where `path` is an array of keys
* returns value found at the end of the path
* returns `undefined` if the path does not exist

[npmpkg]: https://www.npmjs.com/package/recursive-entries
