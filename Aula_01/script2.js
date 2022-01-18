var prompt = require('prompt-sync')();

const numero = prompt('Digite um número ');
console.log(`O número digitado foi: ${numero}`); // Outra forma de colocar uma variável junto de uma string
console.log();
console.log(typeof(numero)); // typeof nos mostra qual o tipo da variável armazenada.