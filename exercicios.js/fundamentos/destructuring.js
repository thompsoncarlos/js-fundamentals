// novo recurso do ES2015 ES6

const pessoa = {
    nome: 'Carlos',
    idade: 38,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade } = pessoa; // {} => representa o operador destructuring
console.log(nome, idade);

const { nome: n, idade: i} = pessoa;
console.log( n, i);

// Como não existem esses atributos apresenta como undefined
const { sobrenome, bemHumorada = true } = pessoa
console.log(sobrenome, bemHumorada);

const { endereco: { logradouro, numero, cep }} = pessoa;
console.log(logradouro, numero, cep);

// Caso tente acessar um dado não aninhado
const { conta: { ag, num }} = pessoa;
console.log(ag, num);