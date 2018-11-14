const squares = require("./sherlockAndSquares").squares;
const testCase = require("./cases");
const cases = testCase.cases;
const results = testCase.results;

console.log(squares(4, 9));

cases.forEach((range, i) => {
  console.log(`
    case ${i + 1}: ${range}
    expecting ${results[i]}
    result ${squares(range[0], range[1])}
  `);
});
