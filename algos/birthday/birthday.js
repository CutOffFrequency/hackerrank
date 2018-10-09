function birthday(s, d, m) {
  return s.reduce((tally, current, i, list) => {
    if (i + m <= list.length) {
      if (list.slice(i, i + m).reduce((a, b) => a + b) === d) tally += 1;
    }
    return tally;
  }, 0);
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));
