const prompt = require('prompt-sync')();

const temp = +prompt("Digite a temperatura ");
const tipo = prompt("Qual tipo de temperatura? (Ex: F, K ou C) ").toUpperCase();

console.log(`retorno: ${converteTemp(temp,tipo)}`);

function converteTemp(num,tipo){
    let Fahrenheit;
    let Kelvin;
    let Celsius;

    if(tipo == "C"){
        Celsius = num;
        Kelvin = num + 273.15;
        Fahrenheit = (num * 1.8) + 32; 
    }else if(tipo == "K"){
        Kelvin = num;
        Celsius = num - 273.15;
        Fahrenheit = Celsius * 1.8 + 32;
    }else if(tipo == "F"){
        Fahrenheit  = num;
        Celsius = (num - 32) / 1.8;
        Kelvin = Celsius + 273.15;
    }else{
        console.log("tipo errado");
    }

    console.log(`temperatura em Celsius: ${Celsius} ∘C`);
    console.log(`temperatura em Kelvin: ${Kelvin} K`);
    console.log(`temperatura em Fahrenheit: ${Fahrenheit} ∘F`);

    let retorno = prompt("Qual temperatura deseja retornar? (Ex: F, K ou C) ").toUpperCase();
    
    if(retorno == "C"){
        return Celsius;
    }else if(retorno == "K"){
        return Kelvin;
    }else if(retorno == "F"){
        return Fahrenheit;
    }else{
        console.log("tipo errado");
    }
}