function utopianTree(n) {
  let height = 1;
  for (let cycle = 0; cycle < n; cycle++) {
    height = cycle % 2 === 0 ? height * 2 : height + 1;
  }
  return height;
}
