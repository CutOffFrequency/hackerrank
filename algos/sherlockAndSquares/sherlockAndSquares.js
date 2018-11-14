/*

this solution is valid but because I'm using brute force it timed out in 5 of 9 test cases,
let's try to optimize it a bit..

function squares(a, b) {
  let tally = 0
  while (a <= b) {
    let sqrt = Math.sqrt(a)
    if (a % sqrt === 0) tally++
    a++
  }
  return tally
}

*/

function squares(a, b) {
  let tally = a % Math.sqrt(a) === 0 ? 1 : 0;
  if (a === b) return tally;
  let prevSqr = Math.floor(Math.sqrt(a)) + 1;
  if (Math.pow(prevSqr, 2) > b) return 0;
  while (Math.pow(prevSqr, 2) <= b) {
    tally += 1;
    prevSqr += 1;
  }
  return tally;
}

module.exports = { squares };
