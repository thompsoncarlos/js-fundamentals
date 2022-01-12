// Challenge:
// Calc average between grades 10, 6.5, 8, 7.5 using ForEach

const grades2 = [10, 6.5, 8, 7.5];
let gradeSum2 = 0;

// callback
// forEach do loop without need use index [i].
grades2.forEach(grade => {
    gradeSum2+= grade
});

let average = gradeSum2 / grades2.length;
console.log(average);



