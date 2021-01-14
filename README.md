# Recursive Entries ♻

[![GitHub forks](https://img.shields.io/github/forks/EthanThatOneKid/recursive-entries.svg?style=social&label=Fork)][repo_fork]
[![GitHub stars](https://img.shields.io/github/stars/EthanThatOneKid/recursive-entries.svg?style=social&label=Star)][repo]
[![bundle size](https://img.shields.io/bundlephobia/min/recursive-entries.svg)][npmpkg]
[![npm downloads](https://img.shields.io/npm/dt/recursive-entries.svg)][npmpkg]

> Object.entries, but recursively ;)

## Installation ⬇

`npm i recursive-entries`

## Usage 🛠

```js
const {
  recursiveEntries,
  valueFromPath
} = require('recursive-entries');
```

> 💡 Tip: Utilize the [test file](test.js) as an example.

## Documentation 📃

## `recursiveEntries()`

This function takes any plain JavaScript object and returns an array of length-2 arrays where the first item is an array of keys leading to the value and the second item is the value found at the end of the path.

```js
const obj =
  { path: { to: { a: "value" } } };
console.log(recursiveEntries(obj));
```

The above code should output the following result:

```ssh
[ ["path", "to", "a"], "value" ]
```
  
## `valueFromPath()`

This function takes any plain JavaScript object and returns the value located at a given path.

```js
const obj =
  { path: { to: { a: "value" } } };
const path = ["path", "to", "a"];
console.log(valueFromPath(obj, path));
```

The above code should output the following result:

```sh
"value"
```

---

[![Buy me a Coffee](https://img.shields.io/badge/buy%20me%20a-coffee-%23FF813F)][bmac]

Engineered with 💖 by [@EthanThatOneKid][creator_url]

[creator_url]: https://github.com/EthanThatOneKid/
[bmac]: https://buymeacoff.ee/etok/
[npmpkg]: https://www.npmjs.com/package/recursive-entries
[repo]: https://github.com/EthanThatOneKid/recursive-entries
[repo_fork]: https://github.com/EthanThatOneKid/recursive-entries/fork
