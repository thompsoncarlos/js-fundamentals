const grades = [10, 6.5, 8, 7.5];

let gradeSum = 0;

for (let i = 0; i < grades.length; i++) {
    gradeSum += grades[i];
}

let average = gradeSum / grades.length;

console.log(average);