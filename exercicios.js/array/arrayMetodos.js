const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa'];
pilotos.pop() // Massa quebrou o carro! Este metodo remove o último elemento.
console.log(pilotos);

pilotos.push('Verstappen');
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento da lista. é o oposto do pop.
console.log(pilotos);

pilotos.unshift('Hamilton'); // Adiciona no inicio da lista, o oposto do push.
console.log(pilotos);

// 'splice' pode adicionar ou remover elementos

// adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa');
console.log(pilotos);

// remover
pilotos.splice(3, 1); // Massa quebrou de novo.
console.log(pilotos);

// 'slice' => pega uma parte do array e gere um novo array.
const algunsPilotos1 = pilotos.slice(2); // Novo array, pega uma parte a partir da 2º posição.
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4); // Pega da 1ª posição até a 4ª não inclusive
console.log(algunsPilotos2);
