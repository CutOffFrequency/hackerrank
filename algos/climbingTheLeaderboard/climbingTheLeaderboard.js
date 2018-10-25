// my first solution timed out on 4 of 12 test cases
//
// function climbingLeaderboard(scores, alice) {
//   // tally ranks until current score is found
//   return alice.reduce(
//     (acc, currentAlice) => {
//       let i = 0;
//       let tally = 1;
//       // update tally
//       while (currentAlice < scores[i]) {
//         tally += scores[i] === scores[i - 1] ? 0 : 1;
//         i++;
//       }
//       acc.ranks = [...acc.ranks, tally];
//       return acc;
//       // since alice's scores are ascending there is no need to update scores
//       return acc;
//     },
//     { scores, ranks: [] }
//   ).ranks;
// }

// so did my next solution
//
// function climbingLeaderboard(scores, alice) {
//   // de dupe standing records
//   let scoresSet = new Set(scores);
//   // sort records ascending
//   let scoresArray = Array.from(scoresSet).sort((a, b) => a - b);
//   return alice.reduce(
//     (acc, current) => {
//       // if current score is greater than lowest record, slice until it isn't
//       while (current > acc.scores[0]) {
//         acc.scores = acc.scores.slice(1);
//       }
//       // if records have remaining elements
//       if (acc.scores.length > 0) {
//         // and current score is equal to lowest remaining record
//         if (current === acc.scores[0])
//           // rank is equal to remaining records length
//           acc.ranks = [...acc.ranks, acc.scores.length];
//         if (current < acc.scores[0])
//           // else it is equal to length plus one
//           acc.ranks = [...acc.ranks, acc.scores.length + 1];
//       } else {
//         // if there are no records remaining, player score is the new highest
//         acc.ranks = [...acc.ranks, 1];
//       }
//       return acc;
//     },
//     { scores: scoresArray, ranks: [] }
//   ).ranks;
// }

// and the solution after that...

function climbingLeaderboard(scores, alice) {
  let records = [];
  let ranks = [];
  let recordIndex = 0;
  let playerIndex = 0;
  // rank records
  while (recordIndex < scores.length) {
    records = records.includes(scores[recordIndex])
      ? records
      : [scores[recordIndex], ...records];
    recordIndex++;
  }
  // reset index to zero and rank player scores
  recordIndex = 0;
  while (playerIndex < alice.length) {
    let newRank;
    let current = alice[playerIndex];
    // if current score has already been ranked, add rank
    if (records.includes(current)) {
      newRank = records.length - records.indexOf(current);
      // else calculate rank and add
    } else {
      // if current is higher than highest rank add rank of 1
      if (current > records[records.length - 1]) {
        newRank = 1;
      } else {
        // increment index while current is greater than records by index
        while (recordIndex < records.length && current > records[recordIndex]) {
          recordIndex++;
        }
        newRank = records.length - recordIndex + 1;
      }
    }
    ranks = [...ranks, newRank];
    playerIndex++;
  }
  return ranks;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
