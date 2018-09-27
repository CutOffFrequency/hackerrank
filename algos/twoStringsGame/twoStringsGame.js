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

const collectSubsByChar = (string, char, subs = []) => {
  let foundSub, newString;
  let target = String.fromCharCode(char);
  let targetIndex = string.indexOf(target);
  if (targetIndex > -1) {
    foundSub = string.substring(string.indexOf(target));
    newString = foundSub.substring(1);
    return collectSubsByChar(newString, char, [...subs, foundSub]);
  } else {
    return subs;
  }
};

const addSubsToSetUpToLimit = (xSet, string, limit) => {
  let currentChar = 97;
  while (currentChar < 123 && xSet.size < limit + 1) {
    collectSubsByChar(string, currentChar, []).forEach(sub => {
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
    .then(addAllSubsToSet(xCoords, x))
    //.then(addSubsToSetUpToLimit(xCoords, x, limit))
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
