// Array é uma estrutura dinamica, no JS. 
// No JS por ser fracamente tipada permite uma estrutura heterogenea(bool, number, texto)
// A boa pratica é que a estrutura seja homogênea!!!

console.log(typeof Array, typeof new Array, typeof []); // [] => Array literal

let aprovados = new Array('Bia', 'Carlos', 'Ana'); // Esta é uma forma nao muito recomendada.
console.log(aprovados);

aprovados = ['Miguel', 'Matheus', 'Liana']; // Esta estrutura literal é a mais recomendada. Array é 0 indexado
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]); // não há este indice, porém não dá erro, apresenta o resultao 'undefined'.

aprovados[3] = 'Paulo'; // Consegue-se adicionar este elemento no Array, porém não é a forma recomendada (push),
aprovados.push('Abia');
console.log(aprovados.length);

aprovados[9] = 'Diogo'; // Permite inserir um elemento fora dos indices existentes, acrescentandos elementos 'undefined'
console.log(aprovados.length); // 10
console.log(aprovados[8] === undefined) // true

console.log(aprovados);
aprovados.sort();
console.log(aprovados);

delete aprovados[1]; // apaga o valor no índice 1 ficando como 'undefined'
console.log(aprovados[1]);
console.log(aprovados[2]);

aprovados = ['Miguel', 'Matheus', 'Liana']; 
aprovados.splice(1, 0, 'Elemento1', 'Elemento2'); // Consegue-se incluir elementos a partir da posição 1.
// aprovados.splice(1, 1); // exclui na altura do índice 1, 1 elementos // 'Matheus'
console.log(aprovados);