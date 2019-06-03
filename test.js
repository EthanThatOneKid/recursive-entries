// Dependencies
const {recursiveEntries, valueFromPath} = require('./main.js');

// Constants
const testData = {
  "hi": {
    "there": {
      "young": "padawan"
    }
  },
  "how": {
    "are": {
      "you": {
        "doing": "today"
      }
    }
  },
  "what": {
    "are": {
      "we": {
        "doing": "here"
      },
      "they": {
        "up": "to"
      }
    }
  }
};
const testPaths = [
  ["hi", "there"],
  ["how", "are", "you", "doing"],
  ["what", "are"]
];

// Helpers
const hr = () => console.log(`\n${"^v".repeat(20)}\n`);

// Main Process
(() => {

  console.time("recursiveEntries");
  const entries = recursiveEntries(testData);
  console.timeEnd("recursiveEntries");
  console.log(
    "Test Data Entries:",
    JSON.stringify(entries, null, 2)
  );
  hr();

  for (let [i, path] of testPaths.entries()) {
    const gimmeLabel = `Path Test #${i + 1} (depth: ${path.length})`;
    console.time(gimmeLabel);
    const value = valueFromPath(testData, path);
    console.timeEnd(gimmeLabel);
    console.log(
      `${gimmeLabel} Results:`,
      JSON.stringify(value, null, 2)
    );
    hr();
  }

})();
