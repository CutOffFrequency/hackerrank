function beautifulDays(i, j, k) {
  let days = 0;
  // for each value between i and j inclusive
  while (i <= j) {
    // if difference between value and it's reverse is divisible by k increment days
    let reverse = parseInt(
      i
        .toString()
        .split("")
        .reverse()
        .join(""),
      10
    );
    let diff = Math.abs(i - reverse);
    days += diff % k === 0 ? 1 : 0;
    i++;
  }
  return days;
}

console.log(beautifulDays(20, 23, 6));
