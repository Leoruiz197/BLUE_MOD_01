var prompt = require('prompt-sync')();

const num = +prompt('Digite 1 ou 2: ');

if(num === 1){
    console.log("era igual a 1");
}else if(num === 2){
    console.log("era igual a 2");
}else{
    console.log("numero invalido");
}