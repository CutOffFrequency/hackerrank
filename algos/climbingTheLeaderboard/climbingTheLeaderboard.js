// I got pretty far with this attempt but it's more complex than it needs to be
// I think I will try to combine both arrays into a set, then convert back
// to an array and I can figure out the record placement by index

function climbingLeaderboard(scores, alice) {
  const flipArr = arr => arr.reduce((flip, current) => [current, ...flip], []);
  // reverse alices scores so they are also descending
  const aliceDescending = flipArr(alice);
  // removes remaining scores until alice's next score is highest
  const sliceOffRemainingScores = (acc, alice, prevHighest) => {
    console.log(`${acc} ${alice} ${prevHighest}`);
    const currentRecord = acc.highScores[0];
    if (alice < currentRecord) {
      acc.highScores = acc.highScores.slice(1);
      if (currentRecord < prevHighest) {
        acc.recordTally += 1;
      }
      return sliceOffRemainingScores(acc, alice, currentRecord);
    }
    return acc;
  };
  // iterate through alice's scores, rank, then return in the correct order
  return flipArr(
    aliceDescending.reduce(
      (acc, score, i, alicesScores) => {
        let newRank, highScoresIndex;
        // if alice's score is greater than or equal to next high score
        if (score >= acc.highScores[0]) {
          // if alice's score is equal to previous high score
          if (score === acc.prev || acc.prev === null) {
            // add current tally value to alicesRanks
            newRank = acc.recordTally;
          } else {
            // else increment tally
            acc.recordTally += 1;
          }
        }
        console.log(`${i} ${acc.alicesRanks} ${newRank}`);
        acc.alicesRanks = [...acc.alicesRanks, newRank];
        // if next high score is higher than previous, increment tally
        if (acc.highScores[0] > acc.prev) acc.recordTally += 1;
        // if alice has scores remaining and the next score is lower than the next record
        if (alicesScores[i + 1] && alicesScores[i + 1] < acc.highScores[1])
          // slice off remaining scores, incrementing tally
          acc = sliceOffRemainingScores(acc, alicesScores[i + 1], acc.prev);
        return acc;
      },
      { highScores: scores, prev: null, recordTally: 1, alicesRanks: [] }
    ).alicesRanks
  );
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
