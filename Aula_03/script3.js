var prompt = require('prompt-sync')();

const num1 = +prompt('Digite um número: ');
const num2 = +prompt('Digite outro número: ');

if (num1 > num2){
    console.log('Os números são iguais. A condição é verdadeira.');
} else if(num2 === 5){
    console.log('num 2 igual a 5');
}else{
    console.log("ultimo else");
}