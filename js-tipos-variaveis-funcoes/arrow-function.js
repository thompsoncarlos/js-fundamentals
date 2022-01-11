function show(name){
    return `My name is ${name}`;
}

// Arrow Function with only one line and one param.
const showArrow = name => `My name is ${name}`;
console.log(showArrow('Thompson'));

// Arrow with more tha one param needed insert '()'
const add = (num1, num2) => num1 + num2;

// Arrow with more than one line in block escope.
const addNumber = (num1, num2) => {
    if(num1 || num2 > 10) {
        return "Only number between 0 - 9";
    } else {
        return num1 + num2;
    }
}

console.log(addNumber(11, 20));
console.log(addNumber(1, 8));