function countingValleys(n, s) {
  return s.split("").reduce(
    (acc, current) => {
      acc.elevation += current.toUpperCase() === "U" ? 1 : -1;
      acc.tally += !acc.inValley && acc.elevation === -1 ? 1 : 0;
      acc.inValley = acc.elevation < 0;
      return acc;
    },
    { elevation: 0, tally: 0, inValley: false }
  ).tally;
}

console.log(countingValleys("UDDDUDUU"));
