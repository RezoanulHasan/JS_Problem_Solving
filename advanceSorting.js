//Create an array of objects representing students with 'name' and 'grades' properties. Write a function to sort the students by average grade in descending order.

const students = [
  { name: "Rezoanul", grades: [75, 80, 95] },
  { name: "Riad", grades: [99, 95, 90] },
  { name: "Hasan", grades: [85, 70, 98] },
];

const sortStudentsByAverageGrade = (arr) => {
  return arr.sort((a, b) => {
    const avgA =
      a.grades.reduce((acc, grade) => acc + grade, 0) / a.grades.length;
    const avgB =
      b.grades.reduce((acc, grade) => acc + grade, 0) / b.grades.length;
    return avgB - avgA;
  });
};

const sortedStudents = sortStudentsByAverageGrade(students);
console.log(sortedStudents);
