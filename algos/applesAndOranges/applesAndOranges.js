function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let fruitsInRange = [0, 0];
  // if fruit falls within the target range, increment appropriate value
  apples.forEach(d => {
    if (a + d >= s && a + d <= t) fruitsInRange[0] += 1;
  });
  // same as above for the second tree
  oranges.forEach(d => {
    if (b + d >= s && b + d <= t) fruitsInRange[1] += 1;
  });
  fruitsInRange.forEach(score => console.log(score));
}

console.log(countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]));
