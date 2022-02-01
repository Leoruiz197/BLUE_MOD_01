const prompt = require('prompt-sync')();

const data = prompt("digite uma data especial (Ex:25/12/2022) ");

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
    if(mes == '01'){
        meses = 'janeiro';
    }else if(mes == '02'){
        meses = 'fevereiro';
    }else if(mes == '03'){
        meses = 'março';
    }else if(mes == '04'){
        meses = 'abril';
    }else if(mes == '05'){
        meses = 'maio';
    }else if(mes == '06'){
        meses = 'junho';
    }else if(mes == '07'){
        meses = 'julho';
    }else if(mes == '08'){
        meses = 'agosto';
    }else if(mes == '09'){
        meses = 'setembro';
    }else if(mes == '10'){
        meses = 'outubro';
    }else if(mes == '11'){
        meses = 'novembro';
    }else if(mes == '12'){
        meses = 'dezembro';
    }

    return `${dia} de ${meses} de ${ano}`;  
}