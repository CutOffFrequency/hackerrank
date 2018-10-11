function sockMerchant(n, ar) {
  return ar.reduce(
    (tally, current, i, arr) => {
      if (tally[current]) {
        tally.pairs += 1;
        delete tally[current];
      } else {
        tally[current] = 1;
      }
      return tally;
    },
    { pairs: 0 }
  ).pairs;
}

sockMerchant(null, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
