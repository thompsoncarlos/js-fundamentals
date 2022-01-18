// objeto  é uma  coleção de elementos utilizando o par: chave e valor, podendo armazenar qualquer tipo de dado

const prod1 = {};
prod1.nome = 'Celular Ultra Mega';
prod1.preco = 4998.90;

console.log(prod1);

const prod2 = {
    nome: 'Camisa polo',
    preco: 79.90,
    obj: {      // o identificador da chave nao pode se repetir, porem dentro do objeto pode-se criar outros objetos com o mesmo nome
        blabla: 1,
        obj: {
            blabla: 2
        }
    }
}