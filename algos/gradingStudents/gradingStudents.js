function gradingStudents(grades) {
  let roundIfNeeded = grade => {
    let gradeSplit = grade.toString().split("");
    let intIndex = "3489".indexOf(gradeSplit[1]);
    if (intIndex < 0) return grade;
    if (intIndex < 2) return parseInt(gradeSplit[0] + 5, 10);
    return (parseInt(gradeSplit[0], 10) + 1) * 10;
  };
  return grades.reduce((grades, grade) => {
    return [...grades, grade < 38 ? grade : roundIfNeeded(grade)];
  }, []);
}
