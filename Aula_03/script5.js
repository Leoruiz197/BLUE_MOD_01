var prompt = require('prompt-sync')();

const nome  = prompt('Digite seu nome: ');
const idade = +prompt('Digite sua idade: ');

if(idade > 17){
    console.log(`${nome}, voce pode beber`); 
}
else{
    console.log(`${nome},voce nao pode beber ainda`);
}