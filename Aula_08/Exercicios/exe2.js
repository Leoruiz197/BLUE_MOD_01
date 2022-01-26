var prompt = require('prompt-sync')();

let numero = +prompt("Digite um numero para descobrir seu fatorial ");

for(let x = numero-1; x > 0 ; x--){
    numero *= x;
}
console.log(numero);