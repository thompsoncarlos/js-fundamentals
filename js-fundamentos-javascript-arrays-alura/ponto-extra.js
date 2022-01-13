// A student receive a xtra point and need add into grades.

const grades = [10, 9, 8, 7, 6];

const updateGrades = grades.map( grade => grade === 10 ? grade : ++grade);
console.log(updateGrades);
