const nome = 'Thompson';
const greenting = 'Hi! My name is ' + nome;
console.log(greenting);

const age = 38;
const born = "Rio de Janeiro";

console.log(greenting + " I'm " + age + " years old. " + "I'm from " + born);

console.log("\n *********** Using template string ************");
console.log(`${greenting} I'm ${age} years old. I'm from ${born}`);