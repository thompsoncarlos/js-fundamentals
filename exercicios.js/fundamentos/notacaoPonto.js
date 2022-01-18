// Acesso aos membros de uma funcao através da notação .
console.log(typeof console);

console.log(Math.ceil(6.1));

const obj1 = {}
obj1.nome = 'Bola';
obj1['nome'] = 'Bola2'; // Outra notacao que cria o atributo assim como o comando assim, dá flexibilidade de nome com espaco, mas o acesso fica ruim
console.log(obj1.nome);

function Obj(nome) {
    this.nome = nome; // com o this torna o atributo 'nome' publico para acessar fora do escopo da function
    this.exec = function () {
        console.log('Exec...');
    }
}

const obj2 = new Obj('Cadeira');
const obj3 = new Obj('Mesa');
console.log(obj2.nome);
console.log(obj3.nome);
obj3.exec();