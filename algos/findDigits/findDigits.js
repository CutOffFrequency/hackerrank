function findDigits(n) {
  // convert to array of strings and return sum of valid divisors
  return n
    .toString()
    .split("")
    .reduce((total, current) => {
      return (total += n % parseInt(current, 10) === 0 ? 1 : 0);
    }, 0);
}
