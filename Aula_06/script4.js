var prompt = require('prompt-sync')();

const estados = ["sao paulo", "rio de janeiro", "Bahia"]

estados.push(prompt("digite um estado: "));
console.log(estados);

estados.unshift(prompt("digite um estado: "));
console.log(estados);