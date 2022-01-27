var prompt = require('prompt-sync')();

let numero = +prompt("Digite um numero para descobrir sua tabuada ");

for(let x = 1; x < 11; x++){
    console.log(`${numero} x ${x} = ${numero*x}`);
}