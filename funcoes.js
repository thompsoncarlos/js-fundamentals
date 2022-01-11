function imprimeText(texto) {
    console.log(texto);
}

// imprimeText("hi");
// imprimeText("other text!");

function add() {
    // const result = 2 + 2;
    return 2 + 2;
}

console.log(add());

imprimeText(add());

// Function withou params and return
function greeting() {
    console.log("Hi everyone!");
}

greeting();

// Function with param without return
function greetingPerson(person) {
    console.log(`Hi! ${person}`);
}
greetingPerson("Thompson");

// If you want use the function greeting in other function you'll need insert the word return
function greeting2 () {
    return 'Hi, Everyone!';
}

function greetingPerson2 (person2) {
    console.log(`${greeting2()} My name is ${person2}`);
}

greetingPerson2("Carlos");

// Function with more than one params
function mathOperation(number1, number2, number3) {
    return number1 + number2 + number3;
}

mathOperation(15, 30, 45); // 90

function operacaoMatematica(numero1, numero2, numero3) {
    return numero1 + numero2 + numero3
   }
   
operacaoMatematica(15, 30, 45) // 90