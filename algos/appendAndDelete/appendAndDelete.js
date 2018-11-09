function appendAndDelete(s, t, k) {
  let diff = t.length - s.length;
  // if k can be satisfied by deleting and inserting alone return yes
  if (k >= s.length + t.length) return "Yes";
  // cache the number of operations to normalize strings
  let numOps =
    s.split("").reduce((tally, curr, i) => {
      if (tally > 0 || curr !== t.charAt(i)) {
        return (tally += i < t.length - 1 ? 2 : 1);
      }
      return 0;
    }, 0) + (diff > 0 ? diff : 0);
  if (numOps > k) return "No";
  if (numOps === k) return "Yes";
  // if difference can be accounted for by arbitrary delete and insert operations
  if ((k - numOps) % 2 === 0) return "Yes";
  return "No";
}

console.log(appendAndDelete("aaa", "aaaaa", 3));
