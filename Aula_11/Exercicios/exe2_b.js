const prompt = require('prompt-sync')();

const data = prompt("digite uma data especial (Ex:25/12/2022) ");
const mesesExt = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
let datas = data.split("/");

console.log(calendario(datas[0],datas[1],datas[2]));

function calendario(dia, mes, ano){
    if(dia > 31 || dia < 1){
        console.log("dia invalido");
        return null
    }else if(mes > 12 || mes < 1){
        console.log("mes invalido");
        return null
    }else if(ano > 3000 || ano < 1900){
        console.log("ano invalido");
        return null
    }
    
    let meses;
    if(mes.slice(0,1) == 0){
        meses = mesesExt[mes.slice(1) - 1];
    }else{
        meses = mesesExt[mes - 1];
    }

    return `${dia} de ${meses} de ${ano}`;  
}