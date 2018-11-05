function angryProfessor(k, a) {
  // return yes if k is greater than number of values in a less than 1
  return k > a.reduce((present, current) => present + (current < 1 ? 1 : 0), 0)
    ? "YES"
    : "NO";
}

console.log(angryProfessor(2, [0, 0, 1, 1]));
