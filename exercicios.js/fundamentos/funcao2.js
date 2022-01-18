// Armazenando uma funcao em uma variavel
// Função anônima (sem nome)
const imprimirSoma = function (a, b) {
  console.log(a + b);
};

imprimirSoma(2, 3);

// Armazenando uma funcao arrow em uma variavel
const soma = (a, b) => {
    return a + b;
}
console.log(soma(2, 3));

// Retorno implícito
const subtracao = (a, b) => a - b;
console.log(subtracao(3, 2));

const imprimir2 = a => console.log(a);
imprimir2('Legal!')