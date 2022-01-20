/* 
    DESAFIO:
    O usuario deve digitar um numero entre 1 e 365, com este valor voce deve me dizer
    qual mes do ano cai esse dia.
*/

var prompt = require('prompt-sync')();

const dia  = +prompt('Digite um dia entre 1 e 365: ');

//dia = 40

if(dia < 1){
    console.log("dia digitado é invalido");
}else if(dia <= 31){
    console.log("janeiro");
}else if(dia <= 59){
    console.log("fevereiro");
}else if(dia <= 90){
    console.log("março");
}else if(dia <= 120){
    console.log("abril");
}else if(dia <= 151){
    console.log("maio");
}else if(dia <= 181){
    console.log("junho");
}else if(dia <= 212){
    console.log("julho");
}else if(dia <= 243){
    console.log("agosto");
}else if(dia <= 273){
    console.log("setembro");
}else if(dia <= 304){
    console.log("outubro");
}else if(dia <= 334){
    console.log("novembro");
}else if(dia <= 365){
    console.log("dezembro");
}else{
    console.log("dia digitado é invalido");
}
