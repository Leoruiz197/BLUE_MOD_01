var prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');

console.log(`Olá ${nome}!`);

const num = 123;
console.log(num)
console.log(typeof num);
console.log();

const numString = num.toString();
console.log(numString)
console.log(typeof numString);

console.log();
console.log("--------------------------");

const num2 = '123';
console.log(num2)
console.log(typeof num2);
console.log();

const toNumber = Number(num2);
console.log(toNumber)
console.log(typeof toNumber);
