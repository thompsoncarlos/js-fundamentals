// Variale 'var'

/* var altura = 5;
var comprimento = 7;

var area = altura * comprimento;
console.log(area); */

// Variable 'let'

/* let high = 5;
let width = 7;
let form = 'retangle';
let area;

if(form === 'retangle') {
    area = high * width;
} else {
    area = high * width / 2;
}
console.log(area); */

// Variable 'const'

const form = 'triangle';
const high = 5;
const width = 7;
let area; // need use 'let' because we'll change value

if(form === 'triangle') {
    area = high * width;
} else {
    area = (high * width) / 2;
}

console.log(`Area com variable 'const':  ${area}`);