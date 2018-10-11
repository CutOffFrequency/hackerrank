function pageCount(n, p) {
  // total page turns possible
  let total = Math.floor(n / 2);
  // turns from first page
  let right = Math.floor(p / 2);
  // turns from last page
  let left = total - right;
  // return the lowest
  return Math.min(...[right, left]);
}

console.log(pageCount(10, 6));
