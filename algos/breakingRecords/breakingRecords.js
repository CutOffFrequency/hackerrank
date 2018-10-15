let breakingRecords = scores => {
  let records = scores.reduce(
    (stats, current, i) => {
      // if current score is new highest adjust stats
      if (stats.highest === null || current > stats.highest) {
        stats.highs += stats.lowest === null ? 0 : 1;
        stats.highest = current;
      }
      // if current score is new lowest adjust stats
      if (stats.lowest === null || current < stats.lowest) {
        stats.lows += stats.lowest === null ? 0 : 1;
        stats.lowest = current;
      }
      return stats;
    },
    {
      highest: null,
      highs: 0,
      lowest: null,
      lows: 0
    }
  );
  return [records.highs, records.lows];
};

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
