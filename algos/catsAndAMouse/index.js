const assert = require("assert");
const catsAndAMouse = require("./catsAndAMouse").catAndMouse;
const testCase = require("./testCase");
const cases = testCase.testCases;
const expectedResults = testCase.expectedResults;

// I ran into a failing condition and the platform wouldn't show my actual
// results so I had to run my own asserts on the expected results
cases.forEach((plots, i) => {
  assert.equal(
    catsAndAMouse(plots[0], plots[1], plots[2]),
    expectedResults[i],
    `fail: ${plots} result: ${catsAndAMouse(
      plots[0],
      plots[1],
      plots[2]
    )} should be ${expectedResults[i]}`
  );
});
