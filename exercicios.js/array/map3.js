Array.prototype.map2 = function (callback) {
    const newArray = [];
    for(let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this));
    }
    return newArray;
}

const carinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json); // transforma as strings em objetos
const apenasPreco = produto => produto.preco;

const resultado = carinho.map2(paraObjeto).map2(apenasPreco);
console.log(resultado);