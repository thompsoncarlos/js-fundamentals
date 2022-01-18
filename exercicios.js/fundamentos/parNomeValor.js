// par nome/valor
const saudacao = 'Opa'; // Contexto léxico 1: Local físico em que a variavel foi definida

function exec() {
    const saudacao = 'Falaa'; // contexto léxico 2. Mesmo nome da variavel mas em contextos diferentes. Primeiro verifica no contexto mais interno,
    return saudacao;
}

// Objetos são grupos aninhados de pares nome/valor
const cliente = {
    nome: 'Carlos',
    idade: 38,
    peso: 90,
    endereco: {
        logradouro: 'Rua Muito Legal',
        numero: 123
    }
}


console.log(saudacao);
console.log(exec());
console.log(cliente);