const quaseArray = {0: 'Carlos', 1: 'Miguel', 2: 'Matheus'};
console.log(quaseArray)

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this)},
    enumerable: false
})
console.log(quaseArray[0]);

const meuArray = ['Carlos', 'Miguel', 'Matheus'];
console.log(quaseArray.toString(), meuArray);