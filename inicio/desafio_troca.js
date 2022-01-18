// o valor da variavel a tem que mudar para a variavel b e da variavel b para a variavel a;
// a = 94 e b = 7

let a = 7;
let b = 94;

console.log("Antes da troca:");
console.log(a);
console.log(b);

console.log("Depois da troca:");

let temp = a;
a = b;
b = temp;
console.log('a: ' + a);
console.log('b: ' + b);
