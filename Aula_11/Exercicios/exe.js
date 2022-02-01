const prompt = require('prompt-sync')();

const num1 = +prompt("digite o primeiro numero ");
const num2 = +prompt("digite o segundo numero ");
const operador = prompt("digite a operação desejada (Ex: + - * /) ");

console.log(operacao(num1,num2,operador));

function operacao(n1,n2,sinal){
    if(sinal == "+"){
        return n1+n2;
    }else if(sinal == "-"){
        return n1-n2;
    }else if(sinal == "*"){
        return n1*n2;
    }else if(sinal == "/"){
        return n1/n2;
    }
}