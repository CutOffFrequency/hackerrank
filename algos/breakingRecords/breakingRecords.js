let breakingRecords = scores => {
  let records = scores.reduce((stats, current, i) => {
    if (i < 1) {
      return {
        highest: current,
        highs: 0,
        lowest: current,
        lows: 0
      };
    } else {
      if (current > stats.highest) {
        stats.highest = current;
        stats.highs += 1;
      }
      if (current < stats.lowest) {
        stats.lowest = current;
        stats.lows += 1;
      }
      return stats;
    }
  }, {});
  return [records.highs, records.lows];
};

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
