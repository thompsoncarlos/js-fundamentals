// Challenge: 
// A teacher give only three of te four notes in the system to a student 
//  10 , 6, 8
// To correct add the note 7 and do the average calc.


const student1 = [10, 6, 8];
console.log(student1);

// PUSH METHOD - TO ADD ELEMENT
// the 'push' method is used to add element to the array at the last position.

student1.push(7);
console.log(student1);

let average = (student1[0] + student1[1] + student1[2] + student1[3]) / student1.length;
console.log(`Media: ${average}`);