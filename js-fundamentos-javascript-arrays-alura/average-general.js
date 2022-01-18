// Challenge:
// With the average of all students for class, calculate the overall average for each class.

const classJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const classJava = [6, 5, 8, 9, 5, 6];
const classPython = [7, 3.5, 8, 9.5];

// reduce() runs the loop on the array “under the hood”, 
// executing for each element the instruction passed in the function
function averageClass(gradesClass) { // classJS
    const sumGrades = gradesClass.reduce((acum, current) => current + acum, 0); 
    // current = 7, acum = 0
    // current = 8, acum = 7
    // current = 8, acum = 15
    // current = 7, acum = 23
    // current = 10, acum = 30
    // current = 6.5, acum = 40
    // current = 4, acum = 46.5
    // current = 10, acum = 50.5
    // current = 7, acum = 60.5
    return sumGrades / gradesClass.length; // 67.5 / 9 = 7.5
    // 7
    // 15
    // 23
    // 30
    // 40
    // 46.5
    // 50.5
    // 60.5
    // 67.5
}

console.log(`Average JavaScript class: ${averageClass(classJS)}`); // 7.5
console.log(`Average Java class: ${averageClass(classJava)}`); // 6.5
console.log(`Average Python class: ${averageClass(classPython)}`); // 7.875

const grades = [10, 6.5, 8, 7];

const average = grades.reduce((a , b) => a + b, 0) / grades.length;
console.log(`Average: ${average}`);