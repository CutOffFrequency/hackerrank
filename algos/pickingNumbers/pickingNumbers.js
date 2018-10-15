function pickingNumbers(a) {
  return a.reduce(
    (acc, cur, i, arr) => {
      // if we haven't caculated the tally for the current integer
      if (acc[cur] === undefined) {
        // iterate over the entire the array
        acc[cur] = arr.reduce((tally, current) => {
          // increment tally for each matching number or each number m where m = current + 1
          if (cur === current || cur === current + 1) tally += 1;
          return tally;
        }, 0);
        // if current tally is new highest, re-cache
        if (acc[cur] > acc.highest) acc.highest = acc[cur];
      }
      return acc;
    },
    { highest: 0 }
  ).highest;
}

console.log(pickingNumbers([1, 2, 1, 2, 3]));
