// Challenge:
// A teacher accidentally entered five grades into the system for a student.
//  10 , 6, 8, 5.5, 10.
// To correct remove the last grade and do the calculation of the correct average.

const grades = [10, 7, 8, 5, 10];
grades.pop(); // 'pop' remove the last element.
console.log(grades);

let average = (grades[0] + grades[1] + grades[2] + grades[3]) / grades.length;
console.log(`Average: ${average}`);