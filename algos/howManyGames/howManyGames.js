function howManyGames(p, d, m, s) {
  let total = 0,
    spent = 0;
  // if the initial price is LT the amount to spend
  if (p < s) {
    spent = p;
  } else {
    return 0;
  }
  // if there is money left and the current price is higher than the minimum
  while (spent <= s && p - d > m) {
    // increment total and adjust current price
    total += 1;
    spent += p - d;
    p = p - d;
  }
  // if we can afford more games at the minimum price, keep buying!
  while (spent <= s) {
    total += 1;
    spent += m;
  }
  return total;
}
