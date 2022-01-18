var prompt = require('prompt-sync')();

const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

const resultado = num1 + num2;
console.log(resultado);

const nome = prompt('Digite seu nome: ');
const sobrenome = prompt('Digite seu sobrenome: ');

console.log(nome +" "+ sobrenome);