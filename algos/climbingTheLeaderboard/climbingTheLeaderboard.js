// this solution passes 8 out of 12 test cases on hacker ran
// I think I can optimize it but sorting alice's scores and iterating
// over both lists once in a single reduce

function climbingLeaderboard(scores, alice) {
  // this step isn't necessary but this is how we would sort and put scores in descending order
  // scores = scores.sort().reduce((flip, current) => [current, ...flip], []);

  // tally ranks until current score is found
  return alice.reduce(
    (acc, currentAlice) => {
      let i = 0;
      let tally = 1;
      // update tally
      while (currentAlice < scores[i]) {
        tally += scores[i] === scores[i - 1] ? 0 : 1;
        i++;
      }
      acc.ranks = [...acc.ranks, tally];
      return acc;
      // since alice's scores are ascending there is no need to update scores
      return acc;
    },
    { scores, ranks: [] }
  ).ranks;
}

climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]);
