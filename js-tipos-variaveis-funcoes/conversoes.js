// Convertion String and Number

// conversao implicita
const number = 456;
const numberString = "456";

// console.log(number == numberString);
console.log(number + numberString); // Concatenate convertion 'number' in String. Only with operator '+'.

// conversao exlicita

// Converting string 'numberString' to number.
console.log(number + Number(numberString)); //912

const number2 = Number("456a");
console.log(number2); //  NaN

// Convertion String
let phone1 = String(123456789);
console.log("The telephone1 is: " + phone1);
console.log(typeof phone1);

let phone2 = 123456789;
console.log("The telephone2 is: " + phone2);
console.log(typeof phone2);

// Also can use toString() to convert String.
let phone3 = 123456789;
let phone3Convert = phone3.toString();
console.log("The telephone3 is: " + phone3Convert);
console.log(typeof phone3Convert);