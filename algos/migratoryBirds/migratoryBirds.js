function migratoryBirds(arr) {
  // iterate over list of birds
  let birds = arr.reduce(
    (tally, current, i, birbs) => {
      // increment tally for current
      tally[current] += 1;
      // if current is equals highest tally
      if (tally[current] === tally.highValue)
        // add to highest array
        tally.highKeys = [...tally.highKeys, current];
      // if current is new highest tally
      if (tally[current] > tally.highValue) {
        // reassign high values
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
