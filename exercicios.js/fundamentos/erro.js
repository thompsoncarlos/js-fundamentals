function tratarErroELancar(erro) {
    // throw new Error('...');
    // throw 10;
    // throw true;
    // throw 'mensagem';
    throw {
        nome: erro.name,
        msg: erro.message,
        data: new Date
    }
}

function imprimirNotaGritado(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!');
    } catch (e) {
        tratarErroELancar(e);
    } finally {
        console.log('Veja já aqui!');
    }
}

const obj = { name: 'Miguel'}
imprimirNotaGritado(obj);