/*

my initial solution passed 9/18 tests

function equalizeArray(arr) {
  return Object.values(arr.reduce((a,b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a
  }, {})).reduce((a, b) => {
    return arr.length - (b > a ? b : a)
  },0)
}
*/

/*

my second attempt passed 17/18 tests until I realized the if message needs to outside of the reduce
to account for an edge case: where there is only one instance of each integer

now all tests are passing

*/

function equalizeArray(arr) {
  return (
    // return difference of array length and tally of most common value
    arr.length -
    arr.reduce(
      (a, b) => {
        // if we haven't found current value yet, initialize tally
        if (!a[b]) {
          a[b] = 1;
        } else {
          // else increment
          a[b] += 1;
        }
        // update stats for highest outside of reduce in case there is only one instance of each int
        if (a[b] > a.highest.tally) {
          a = {
            ...a,
            highest: { value: b, tally: a[b] }
          };
        }
        return a;
      },
      { highest: { value: 0, tally: 0 } }
    ).highest.tally
  );
}

equalizeArray([37, 32, 97, 35, 76, 62]);
