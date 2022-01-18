var funcs = [];

for (let i = 0; i < 10; i++) {
    funcs.push( function() {
        console.log(i);
    })
}

// let tem memoria , closure e guarda a informação, tem consciência do local onde foi definida.
funcs[2]();
funcs[8]();