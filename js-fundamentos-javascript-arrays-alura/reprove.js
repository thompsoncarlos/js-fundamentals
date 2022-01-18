// Challeng:
// After calc students average, we need to show who are reproved.

// filter method:

const students = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const grades = [7, 4.5, 8, 7.5];

const reproved = students.filter((_, index) => grades[index] < 5);
console.log(reproved);