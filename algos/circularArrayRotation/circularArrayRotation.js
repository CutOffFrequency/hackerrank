function circularArrayRotation(a, k, queries) {
  // cache length
  var l = a.length;
  // iterate over queries
  return queries.map(q => {
    // cache difference of l from rotations + targeted index
    let calculatedIndex = l - k + q;
    return a[
      // if difference is less than zero
      calculatedIndex % l < 0
        ? // use length - absolute value
          l - Math.abs(calculatedIndex % l)
        : // else return difference
          calculatedIndex % l
    ];
  });
}
