// Main Stuff
const recursiveEntries = (obj, path = [], stack = []) => {
  if (typeof obj == "object") {
    for (let [k, v] of Object.entries(obj))
    stack = recursiveEntries(v, [...path, k], stack);
  } else {
    stack.push([path, obj]);
  }
  return stack;
};

const valueFromPath = (obj, path) => typeof obj == "object" && !!path.length ? valueFromPath(obj[path.shift()], path) : obj


// Exports
module.exports = {recursiveEntries, valueFromPath};
