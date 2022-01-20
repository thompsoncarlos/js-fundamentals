// array.reduce(callback[, valorInicial])
// callback => valor anterior( acumulador ), o valor atual, indice, array ( ao qual a função reduce foi executada )
// O resultado dessa função é passado para outro array com o valor atual.

const alunos = [
  {nome: 'João', nota: 7.3, bolsita: false },
  {nome: 'Maria', nota: 9.2, bolsita: true },
  {nome: 'Pedro', nota: 9.8, bolsita: false },
  {nome: 'Ana', nota: 8.7, bolsita: true },
]

console.log(alunos.map(a => a.nota));
const resultado = alunos.map(a => a.nota).reduce(function (acumulador, atual) {
   console.log(acumulador, atual);
   return acumulador + atual;
}, 0)
 console.log(resultado) // resultado final