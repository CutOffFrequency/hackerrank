function catAndMouse(x, y, z) {
  return Math.abs(z - x) === Math.abs(z - y)
    ? // if x and y are equidistant from z
      "Mouse C"
    : Math.min(...[x, y, z]) === z
      ? // if z is the lowest, get the lower of x and y
        Math.min(...[x, y]) === x
        ? "Cat A"
        : "Cat B"
      : Math.max(...[x, y, z]) === z
        ? // if z is the highest, get the higher of x and y
          Math.max(...[x, y]) === x
          ? "Cat A"
          : "Cat B"
        : // else get the closest of x and y
          Math.abs(z - x) < Math.abs(z - y)
          ? "Cat A"
          : "Cat B";
}

module.exports = {
  catAndMouse
};
