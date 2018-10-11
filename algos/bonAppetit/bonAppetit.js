function bonAppetit(bill, k, b) {
  let share = bill.filter((_, i) => i !== k).reduce((a, b) => a + b) / 2;
  console.log(share === b ? "Bon Appetit" : b - share);
}

bonAppetit([40, 39, 97, 5, 2, 84, 35, 93, 59, 39], 2, 198);
