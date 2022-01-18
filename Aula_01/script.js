var prompt = require('prompt-sync')();

let nome = "Leo";
console.log(nome);

nome = "Duda";
console.log(nome);

const string = 'Blue EdTech';
const numberInt = 10;
const numberFloat = 10.5;
const coisa = true;

console.log(typeof(string));
console.log(typeof(numberInt));
console.log(typeof(numberFloat));
console.log(typeof(coisa));

const entrada = prompt('Qual é o seu nome? ');
console.log('Olá ' + entrada);