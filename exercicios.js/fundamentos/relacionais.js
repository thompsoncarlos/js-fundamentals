console.log('01)', '1' == 1); // == : comparacao de  valor, nao de tipo
console.log('02)', '1' === 1); // === : estritament igual verifica se o tipo e o valor sao iguais
console.log('03)', '3' != 3);
console.log('04)', '3' !== 3);
console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2); // true

const d1 = new Date(0); // Date(0): data de referencia do JS 01/01/1970
const d2 = new Date(0);
console.log('09)', d1 === d2); // trabalha com referencia, endereco de memória, por isso são diferentes.
console.log('10)', d1 == d2); // false
console.log('11)', d1.getTime() === d2.getTime());

console.log('12)', undefined == null); // true
console.log('13)', undefined === null); // false