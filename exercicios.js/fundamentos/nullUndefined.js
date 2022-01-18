let valor; // nao inicializada
console.log(valor); // undefined
// console.log(valor2);

valor = null; // ausencia de valor
console.log(valor);
// console.log(valor.toString()); // o nulo nao tem nenhuma referencia ao valor toString

const produto = {};
console.log(produto.preco);
console.log(produto);

produto.preco = 3.50
console.log(produto);

produto.preco = undefined; // evite atribuir undefined
console.log(!!produto.preco); // false
console.log(produto); // { preco: undefined }

produto.preco = null; // sem preço
console.log(!!produto.preco); // false
console.log(produto); // { preco: null }