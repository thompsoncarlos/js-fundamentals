// TABELA VERDADE

/* E
v e v -> v
v e f -> f
f e ? -> f */

/* OU
v ou f -> v
f ou v -> v
f ou f -> f */

/* XOR (ou exclusivo) para ser verdadeiro os dois operandos tem que ser diferentes
 v xor v -> f
 v xor f -> v
 f xor v -> v
 f xor f -> f */

/* NEGACAO LOGICA
!v -> f
!f -> v */

function compras(trabalho1 , trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    // const comprarTV32 = !!(trabalho1 ^ trabalho2); // bitwise xor
    const comprarTV32 = trabalho1 != trabalho2; // simula o XOR - ou exclusivo 
    const manterSaudavel = !comprarSorvete; // operador unário

    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel };
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
