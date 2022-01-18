var funcs = [];

for (var i = 0; i < 10; i++) {
    funcs.push( function() {
        console.log(i);
    })
}

// var não tem escopo de funcao, por isso sempre imprime 10 e nao respeita a variavel.
funcs[2]();
funcs[8]();