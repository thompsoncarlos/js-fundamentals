function teste1(num) {
    if(num > 7) 
        console.log(num);
    console.log('Final');
}

// teste1(6);
// teste1(8);

function teste2(num) {
    if(num > 7); { // cuidado com o ';' , não usar com as estrutura de controle
        console.log(num);
    }
}

teste2(6); // 6
teste2(8); // 8