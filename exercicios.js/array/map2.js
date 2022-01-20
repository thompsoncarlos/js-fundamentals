const carinho = [
    '{"nome": "Borracha", "preco": 3.45}',
    '{"nome": "Caderno", "preco": 13.90}',
    '{"nome": "Kit de lápis", "preco": 41.22}',
    '{"nome": "Caneta", "preco": 7.50}'
]

// Retornar um array apenas com os preços

const paraObjeto = json => JSON.parse(json); // transforma as strings em objetos
const apenasPreco = produto => produto.preco;

const resultado = carinho.map(paraObjeto).map(apenasPreco);
console.log(resultado);