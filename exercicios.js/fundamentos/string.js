const escola = "Cod3r";

console.log(escola.charAt(4)); // 'r'
console.log(escola.charAt(5)); // don't find character at index 5, because start in 0 and the word size is 4 index
console.log(escola.charCodeAt(3)); // unicode code to index 3

console.log(escola.substring(1));
console.log(escola.substring(0, 3)); // Go index 0 until index 3 not inclusive

console.log('Escola '.concat(escola).concat("!"));
console.log(escola.replace(3, 'e')); // replace index 3 to charc 'e'
console.log(escola.replace(/\d/g, 'e')); // express regular 'regex' when All digits 'd' replace to 'e'

console.log('Carlos, Liana, Miguel, Matheus'.split(',')); // convert to array