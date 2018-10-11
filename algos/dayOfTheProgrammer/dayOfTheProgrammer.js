function dayOfProgrammer(year) {
  return year === 1918
    ? "26.09.1918"
    : year < 1918
      ? // julian calendar
        year % 4 === 0
        ? `12.09.${year}`
        : `13.09.${year}`
      : // gregorian calendar
        year % 400 === 0
        ? `12.09.${year}`
        : year % 100 === 0
          ? `13.09.${year}`
          : year % 4 === 0
            ? `12.09.${year}`
            : `13.09.${year}`;
}

console.log(dayOfProgrammer(1918));
