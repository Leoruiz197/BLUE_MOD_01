var prompt = require('prompt-sync')();

const linhas = +prompt("quantas linhas deseja? ");
const colunas = +prompt("quantas colunas deseja? ");

const matriz = [];

for(let l=0 ; l < linhas; l++){
    const cols = []; 
    for(let c=0 ; c < colunas; c++){
        cols[c] = +prompt(`linha: ${l+1}, coluna: ${c+1} - digite um numero inteiro `);
    }
    matriz[l] = cols;
}

console.table(matriz);