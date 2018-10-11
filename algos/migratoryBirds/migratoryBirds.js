function migratoryBirds(arr) {
  let birds = arr.reduce(
    (tally, current, i, birbs) => {
      tally[current] += 1;
      if (tally[current] === tally.highValue)
        tally.highKeys = [...tally.highKeys, current];
      if (tally[current] > tally.highValue) {
        tally.highValue = tally[current];
        tally.highKeys = [current];
      }
      return tally;
    },
    { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, highValue: 0, highKeys: [] }
  );
  return birds.highKeys.sort()[0];
}

console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4]));
