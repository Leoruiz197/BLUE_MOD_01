var prompt = require('prompt-sync')();

let cont = 0;
const numeros = [];
const pares = [];
const impares = []; 

while(cont < 20){
    numeros.push(+prompt(`${cont+1} - Digite um numero inteiro: `));
    if(numeros[cont]%2 === 0 ){
        pares.push(numeros[cont]);
    }else{
        impares.push(numeros[cont]);
    }
    cont++;
}

console.log("Original: ");
console.log(numeros);
console.log(`Pares - total: ${pares.length}`);
console.log(pares);
console.log(`Impares - total: ${impares.length}`);
console.log(impares);