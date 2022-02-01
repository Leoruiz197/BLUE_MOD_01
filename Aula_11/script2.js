const prompt = require('prompt-sync')();

function saudacao(ano=0, nome = 'Aluno(a)'){
	let idade = 2022 - ano;
    console.log();
    console.log(`Seja bem vindo(a) ${nome}!`);
    if (idade >= 18){
        console.log('Você é maior de idade');
    } else {
        console.log('Você é menor de idade');
    }
    console.log();
}

let nome = prompt('Qual o seu nome? ');
let nasc = prompt('Qual o seu ano de nascimento? ')

saudacao(nasc);