function divisibleSumPairs(n, k, ar) {
  return ar.reduce((tally, current, i, list) => {
    let sumIndex = i + 1;
    while (sumIndex < list.length) {
      if ((current + list[sumIndex]) % k === 0) tally += 1;
      sumIndex += 1;
    }
    return tally;
  }, 0);
}

console.log(divisibleSumPairs(null, 3, [1, 3, 2, 6, 1, 2]));
