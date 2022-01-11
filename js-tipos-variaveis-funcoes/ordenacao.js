// Ordenando uma lista

var list = [10, 1, 5, 9, 8, 12, 15];

// function compareNumber(a, b) {
//     if(a == b) return 0;
//     if(a < b) return -1;
//     if(a > b) return 1;
// }

list.sort((a, b) => a - b);
console.log(list);