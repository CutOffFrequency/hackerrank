// this solution only works for the example case on hacker rank because the
// test cases time out. I'm not sure how the two players in this game could
// possibly have a single sheet of paper with two strings up to 3 * 10^5
// characters on it but I digress....
//
// Ways I've tried optimizing:
//
// deriving the target coordinates indices instead of iterating over both
// (I'm certain any performant solution would have to use some method like
//  this and I'm quite proud of the fact that I figured this one out
//  so much so that I messaged everyone on my slack channel about it
//  Sorry Shawn and Chris!)
//
// using string.substring instead of string.slice
// (string.substring is more performant according to jsperf)
//
// limiting the number of iterations over string 'a' for the target index
// (this was really just a minor tweak, I'm grasping at straws here)
//
// I've come to the conclusion that JavaScript is probably the wrong
// tool for the job but it's the language I'm most familiar with at
// the moment. I put up a query on the problems discussion thread asking
// if anyone has managed to solve this problem with JavaScript
//
// there hasn't been a response yet.

// get every sub string that starts with the first character
const createAllSubsFromFirstIndex = string => {
  return string.split("").reduce((subs, _, i, string) => {
    let final = string.length;
    while (final > i) {
      subs = [...subs, string.join("").substring(i, final)];
      final -= 1;
    }
    return subs;
  }, []);
};

const addAllSubsToSet = (set, string) => {
  createAllSubsFromFirstIndex(string).forEach(sub => set.add(sub));
};

// returns all substrings in given strting with character specified
const collectSubsByChar = (string, char, subs = []) => {
  let foundSub, newString;
  let target = String.fromCharCode(char);
  let targetIndex = string.indexOf(target);
  // if character is found
  if (targetIndex > -1) {
    // cache substring starting with the character
    foundSub = string.substring(string.indexOf(target));
    // return the rest of the string to keep looking
    newString = foundSub.substring(1);
    return collectSubsByChar(newString, char, [...subs, foundSub]);
  } else {
    // return any substrings cached
    return subs;
  }
};

// add substrings to set until limit value is reached
const addSubsToSetUpToLimit = (xSet, string, limit) => {
  let currentChar = 97;
  while (currentChar < 123 && xSet.size < limit + 1) {
    // gather each sub in string starting with currentChar to the end
    collectSubsByChar(string, currentChar, []).forEach(sub => {
      // get each possible sub in sub starting with currentChar
      createAllSubsFromFirstIndex(sub).forEach(subOfSub => {
        xSet.add(subOfSub);
      });
    });
    currentChar += 1;
  }
};

const getCoordAtK = (k, x, y) => {
  let xArr, yArr, limit;
  let xCoords = new Set([""]);
  let yCoords = new Set([""]);
  let promiseY = new Promise((res, rej) => {
    addAllSubsToSet(yCoords, y);
  });
  promiseY
    .then((limit = Math.floor(k / yCoords.size)))
    .then(addSubsToSetUpToLimit(xCoords, x, limit))
    .then((xArr = Array.from(xCoords).sort()))
    .then((yArr = Array.from(yCoords).sort()));
  return xArr[limit] !== undefined
    ? [xArr[limit], yArr[k % yCoords.size]]
    : "no such solution";
};

module.exports = {
  getCoordAtK,
  createAllSubsFromFirstIndex,
  collectSubsByChar
};
