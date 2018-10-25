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

// and the solution after that is now passing 9 out of 12 test cases! PROGRESS!
//
function climbingLeaderboard(scores, alice) {
  let records = new Map();
  let rank = 1;
  let ranks = [];
  let index = scores.length - 1;
  let newRank;
  for (let i = 0; i < scores.length; i++) {
    if (!records.has(scores[i])) records.set(scores[i], rank++);
  }
  for (let i = 0; i < alice.length; i++) {
    // if value exists: rank of value
    if (records.has(alice[i])) {
      newRank = records.get(alice[i]);
      // if higher than highest value: 1
    } else if (alice[i] > scores[0]) {
      newRank = 1;
      // if lower than lowest: length - 1
    } else if (alice[i] < scores[scores.length - 1]) {
      newRank = rank++;
      // if lower than a given value but higher than prev: next rank + 1
    } else {
      let j = index;
      while (alice[i] > scores[j]) {
        j--;
        // recache index to prevent unnecessary iterations
        let index = j;
      }
      newRank = records.get(scores[j]) + 1;
    }
    ranks = [...ranks, newRank];
  }
  return ranks;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
