function getTotalX(a, b) {
  let lowest = Math.max(...a);
  let acc = lowest;
  let possibleFactors = [];
  // true if X is a factor of all integers in list
  let isXAFactorOfList = (x, list) => list.every(int => int % x === 0);
  // true if all integers in list are a factor of x
  let isListAllFactorsOfX = (x, list) => list.every(int => x % int === 0);
  // iterate over entire set of possible integers
  while (acc <= Math.min(...b)) {
    // push if every integer in a is a factor of the current value
    if (isListAllFactorsOfX(acc, a)) possibleFactors.push(acc);
    acc += 1;
  }
  // take all possible factors
  return possibleFactors.reduce((actualFactors, current, i, factors) => {
    // and cross check that each is a factor of all integers in b
    if (isXAFactorOfList(current, b))
      actualFactors = [...actualFactors, current];
    return actualFactors;
    // then return the number of actual factors
  }, []).length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
