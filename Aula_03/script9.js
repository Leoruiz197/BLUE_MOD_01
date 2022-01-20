var prompt = require('prompt-sync')();

const nome = prompt('Digite seu nome: ');
const nomeLower = nome.toLowerCase();
const nomeUpper = nome.toUpperCase();
const nomeReplace = nome.replace(' ', '');
const nome1 = nome.indexOf('o',3);
const nomeSlice1 = nome.slice(1,7);

console.log(nomeSlice1);
console.log(nome1);

console.log(nome);
console.log(nomeLower);
console.log(nomeUpper);
console.log(nomeReplace);
console.log(nome.trim());

const nomeSplit = nome.split(' ');
console.log(nomeSplit);