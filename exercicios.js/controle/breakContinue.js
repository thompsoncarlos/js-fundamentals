const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log('Break...')
// break => causam desvio de fluxo para fora do lanço corrente, neste caso o 'for'.
for (let x in nums) {
    if (x == 5) {
        break;
    }
    console.log(`${x} = ${nums[x]}`);
}
console.log('Continue...')
// continue => pula quando a condicao é atendida. Faz sentindo mais em estruturas de repetição
for (y in nums) {
    if (y == 5) {
        continue;
    }
    console.log(`${y} = ${nums[y]}`);
}

externo: for (a in nums) { 
    for (b in nums) {
        if (a == 2 && b == 3) 
            // break; // chama do laço mais interno
            break externo
            console.log(`Par = ${a}, ${b}`);
    }
}