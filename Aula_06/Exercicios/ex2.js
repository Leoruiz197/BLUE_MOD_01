const prompt = require('prompt-sync')();

let idade = [];
let altura = [];
let cont = 0;
let mediaI = 0;
let mediaA = 0;

while(cont < 5){
    idade.push(+prompt(`${cont+1} - Digite sua idade:`));
    altura.push(+prompt(`${cont+1} - Digite a sua altura:`));
    mediaI += idade[cont];
    mediaA += altura[cont];
    cont++;
}

mediaI = mediaI/idade.length;
console.log(`Média de idade: ${parseInt(mediaI)} anos!`);

mediaA = mediaA/altura.length;
console.log(`Média de altura: ${parseFloat(mediaA)} metros!`);