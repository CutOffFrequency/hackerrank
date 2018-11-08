function saveThePrisoner(n, m, s) {
  let final;
  if (m < n) {
    // if there are less treats then prisoners
    final = s + m - 1;
  } else {
    // else use modulo to calculate the position
    final = (m % n) + s - 1;
  }
  return final <= n ? final : final - n;
}
