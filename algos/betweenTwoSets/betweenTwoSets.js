function getTotalX(a, b) {
  let lowest = Math.max(...a);
  let acc = lowest;
  let possibleFactors = [];
  let isXAFactorOfList = (x, list) => list.every(int => int % x === 0);
  let isListAllFactorsOfX = (x, list) => list.every(int => x % int === 0);
  while (acc <= Math.min(...b)) {
    if (isListAllFactorsOfX(acc, a)) possibleFactors.push(acc);
    acc += 1;
  }
  console.log(possibleFactors);
  return possibleFactors.reduce((actualFactors, current, i, factors) => {
    if (isXAFactorOfList(current, b))
      actualFactors = [...actualFactors, current];
    return actualFactors;
  }, []).length;
}

console.log(getTotalX([2, 4], [16, 32, 96]));
