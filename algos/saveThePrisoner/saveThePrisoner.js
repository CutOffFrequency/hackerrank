function saveThePrisoner(n, m, s) {
  let final;
  if (m < n) {
    // if there are less treats then prisoners
    final = s + m - 1;
  } else {
    // else use modulo to calculate the position
    final = (m % n) + s - 1;
  }
  // if final is greater than the number of prisoners, subtract them
  final = final <= n ? final : final - n;
  // if final is zero, return last number else final
  return final === 0 ? n : final;
}

console.log(saveThePrisoner(5, 2, 2));
