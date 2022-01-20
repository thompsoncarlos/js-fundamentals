// Utilizado para filtrar um array e passa-lo para outro.
const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nomw: 'Copo de Vidro', preco: 12.49, fragil: true},
    { nome: 'Copo de Plástico', preco: 18.99, fragil: false} 
]

console.log(produtos.filter(function(p) { 
    return false;    
}));

// Quero filtrar por produtos caros e frágeis
const caro = produto => produto.preco >= 500;
const fragil = produto => produto.fragil;

console.log(produtos.filter(caro).filter(fragil));
