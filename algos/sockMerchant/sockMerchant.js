function sockMerchant(n, ar) {
  // iterate over list
  return ar.reduce(
    (tally, current, i, arr) => {
      // if we already found a match for current
      if (tally[current]) {
        // increment pairs total
        tally.pairs += 1;
        // and remove match from the pile
        delete tally[current];
      } else {
        // else add to the pile
        tally[current] = 1;
      }
      return tally;
    },
    { pairs: 0 }
  ).pairs;
}

sockMerchant(null, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
