var prompt = require('prompt-sync')();
let senha = '';

do {
    senha = prompt('Digite a senha de acesso: ');
} while ( senha.trim().toUpperCase() != 'BLUE' );

console.log("logado com sucesso");