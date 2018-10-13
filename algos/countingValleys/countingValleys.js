function countingValleys(n, s) {
  // convert string to array and iterate
  return s.split("").reduce(
    (acc, current) => {
      // adjust elevation to new state
      acc.elevation += current.toUpperCase() === "U" ? 1 : -1;
      // increment tally if in a new valley
      acc.tally += !acc.inValley && acc.elevation === -1 ? 1 : 0;
      // update boolean as a reference for the next state
      // could have cached index and array instead but this
      // appears more readable to me
      acc.inValley = acc.elevation < 0;
      return acc;
    },
    { elevation: 0, tally: 0, inValley: false }
  ).tally;
}

console.log(countingValleys("UDDDUDUU"));
