// function myFunction(param) {
//     // block espope
// }

// myFunction();

// Function expression
const calc = function(num1 , num2) { return num1 + num2 }; // function withou name is called anonymous function
// console.log(calc(2, 3));

// function and var are Hoisted
console.log(show());
function show() {
    return 'Hi!';
}

// This is the difference when use expression function than normal declaration function, in expression function not hoisted.
console.log(add(1 , 3));
const add = function(number1, number2){
    return number1 + number2;
}
// ReferenceError: Cannot access 'add' before initialization
