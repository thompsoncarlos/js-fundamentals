// Usando let dentro e fora do escopo.

let numero = 1;

{
    let numero = 2;
    console.log('dentro = ', numero) // Procura no escopo menor, mais interno primeiro, depois em escopo mais abragente.
}
console.log('fora = ', numero);

// var numero = 1; // Escopo glabal, de função

// {
//     let numero = 2; // Escopo global, de função e de bloco
//     console.log('dentro = ', numero);
// }
// console.log('fora = ', numero);