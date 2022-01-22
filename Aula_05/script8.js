let num = 0;
let min = 1;
let max = 10;
min = Math.ceil(min);
max = Math.floor(max);
num =  Math.floor(Math.random() * (max - min)) + min;
console.log(num);

var prompt = require('prompt-sync')();

let nome = "";

//laco para nome
do{
    if(nome.length < 4  && nome != ""){
        console.log("nome deve conter mais de 3 caracteres");
    }
    nome = prompt("digite o nome: ");
}while(nome.length < 4)

// //laco para idade
// do{
//     if(nome.length < 4){
//         console.log("nome deve conter mais de 3 caracteres");
//     }
//     nome = prompt("digite o nome: ");
// }while(nome.length < 4)