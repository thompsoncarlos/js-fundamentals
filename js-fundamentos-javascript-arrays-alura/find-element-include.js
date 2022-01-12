// Challenge: Searching the list
// 1 - make a function that takes as an argument the name of a student
// 2 - check if the student is present in the list and return the final average in the same index
// 3 - if the student's name is not in the list, return a message informing that the student was not found

const students = ["Eduardo", "Matheus", "Miguel"];
const grades = [10, 7, 8.5];
let listGradesAndStudent = [students, grades];

const showNameGrade = (studentName) => {
  if (listGradesAndStudent[0].includes(studentName)) { 
    // [0] -> student array; .includes return a boolean value if found the value ('Matheus' = true)
    let index = listGradesAndStudent[0].indexOf(studentName); // indexOf return a value of student index
                // in student array return a value of student index and add to variable 'index'    
    return (
      listGradesAndStudent[0][index] + // stundent array [index = 1]
      ` your average is:  ` +
      listGradesAndStudent[1][index] // grade array [index = 1] = grade '7' 
    );
  } else {
    return "The student was not found!";
  }
};

console.log(showNameGrade("Matheus"));
