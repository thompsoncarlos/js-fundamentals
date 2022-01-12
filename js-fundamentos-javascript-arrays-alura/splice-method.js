// 'splice' method change original array, adding new elements and remove old.

var grades = [10, 7, 8, 9.5];
var removed = grades.splice(2, 1); // remove 1 element from  position 2.
console.log(removed);
console.log(grades);

var removedAndAdd = grades.splice(1, 1, 6.5); // remove 1 elemente from position 1 and add value 6.5 to this position.
console.log(grades);

                 //0      //1     //2     //3  
const names = ['Miguel', 'Nuno', 'Pedro', 'Liana', 'Matheus', 'Carlos'];
names.splice(1, 2, 'Eduardo'); // remove 2 element from position 1: 'Nuno' and 'Pedro'.
console.log(names); // [ 'Miguel', 'Eduardo', 'Liana', 'Matheus', 'Carlos' ]
