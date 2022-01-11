// Structure Control
// Array: Coleção ordenada de valores

// media 10, 6.5, 8, 7.5

let nota1 = 10;
let nota2 = 6.5;
let nota3 = 8;
let nota4 = 7.5;

let media = (nota1 + nota2 + nota3 + nota4) / 4;
console.log(`Media 1: ${media}`); // 8

// Refactor using Array

const notas = [10, 6.5, 8, 7.5];

let media2 = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;
console.log(`Media 2: ${media2}`); // 8
