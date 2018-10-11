function birthday(s, d, m) {
  // for each number in the sequence
  return s.reduce((tally, current, i, list) => {
    // iterate until the end of the sequence
    if (i + m <= list.length) {
      // increment tally for every pair that equals the target number
      if (list.slice(i, i + m).reduce((a, b) => a + b) === d) tally += 1;
    }
    return tally;
  }, 0);
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
