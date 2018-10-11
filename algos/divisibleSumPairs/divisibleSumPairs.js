function divisibleSumPairs(n, k, ar) {
  // for each integer in the list
  return ar.reduce((tally, current, i, list) => {
    let sumIndex = i + 1;
    // iterate until the end
    while (sumIndex < list.length) {
      // increment tally if sum of pair is divisible by k
      if ((current + list[sumIndex]) % k === 0) tally += 1;
      sumIndex += 1;
    }
    return tally;
  }, 0);
}

console.log(divisibleSumPairs(null, 3, [1, 3, 2, 6, 1, 2]));
