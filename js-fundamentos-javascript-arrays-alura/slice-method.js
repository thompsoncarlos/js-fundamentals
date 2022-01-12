// 'slice() method' return a copy of the array origin between values start and end position(end position not include)

// Challenge

const grades = [10, 7, 8, 9.5];
const gradesSlice = grades.slice(0 , 2);
console.log(gradesSlice);

const names = ['Miguel', 'Nuno', 'Pedro', 'Liana', 'Matheus', 'Carlos'];
const room1 = names.slice(0, names.length / 2); 
const room2 = names.slice(names.length / 2); 

console.log(`Students room 1:  ${room1}`);
console.log(`Students room 2:  ${room2}`);