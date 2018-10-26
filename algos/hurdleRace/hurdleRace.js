function hurdleRace(k, height) {
  let highest = height.reduce(
    (highest, current) => (current > highest ? current : highest),
    0
  );
  return highest - k < 0 ? 0 : highest - k;
}
