function formingMagicSquare(s) {
  // flatten array
  const sFlat = s.reduce((arr, row) => arr.concat(row));
  // init each possible magic square
  const mSquares = [
    [8, 1, 6, 3, 5, 7, 4, 9, 2],
    [4, 3, 8, 9, 5, 1, 2, 7, 6],
    [2, 9, 4, 7, 5, 3, 6, 1, 8],
    [6, 7, 2, 1, 5, 9, 8, 3, 4],
    [6, 1, 8, 7, 5, 3, 2, 9, 4],
    [8, 3, 4, 1, 5, 9, 6, 7, 2],
    [4, 9, 2, 3, 5, 7, 8, 1, 6],
    [2, 7, 6, 9, 5, 1, 4, 3, 8]
  ];
  // calculate which mSquare is the closest to the given array
  return mSquares.reduce((lowestCost, mSquare) => {
    const cost = mSquare.reduce((total, current, i) => {
      const diff = Math.abs(current - sFlat[i]);
      return total + diff;
    }, 0);
    // if lowestCost is positive return the lower else cost
    return lowestCost > -1 ? Math.min(...[cost, lowestCost]) : cost;
  }, -1);
}

console.log(formingMagicSquare([[5, 3, 4], [1, 5, 8], [6, 4, 2]]));
