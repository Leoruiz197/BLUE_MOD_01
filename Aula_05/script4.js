var prompt = require('prompt-sync')();
let senha = '';
let tentativas = 0

do {
    if (tentativas == 5){
        console.log('Número limite de tentativas atingido.');
        break;
    } 

    senha = prompt('Digite a senha de acesso: ');
    tentativas++;
} while ( senha != 'Blue' );

console.log('executouuu');