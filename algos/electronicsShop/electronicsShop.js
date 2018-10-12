function getMoneySpent(keyboards, drives, b) {
  // iterate over keyboards
  return keyboards.reduce((highest, cKey) => {
    // iterate over drives
    return drives((highest, cDrive) => {
      // return highest value that is in budget or initial value if none
      return cKey + cDrive <= b && cKey + cDrive > highest
        ? cKey + cDrive
        : highest;
    }, highest);
  }, -1);
}
