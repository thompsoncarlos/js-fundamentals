var a = 3;
let b = 4;

var a = 30; // var can redeclare the variable
// let b = 40; // SyntaxError: Identifier 'b' has already been declared
b = 40;

console.log(a, b);

a = 300;
b = 400;

console.log(a, b);

const c = 5;
// c = 50; // TypeError: Assignment to constant variable.
console.log(c); 
