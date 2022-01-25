const prompt = require('prompt-sync')();

console.log("Cadastro de alunos!");

const numAlunos = +prompt("Digite o numero de alunos que deseja cadastrar: ");
let nomes = [];
let notas = [];
let media = 0;
let cont = 0;

while(cont < numAlunos){
    nomes.push(prompt(`${cont+1} - Digite o nome do aluno:`));
    notas.push(+prompt(`${cont+1} - Digite a nota do aluno:`));
    media += notas[cont];
    cont++;
}

cont = 0;

while(cont < numAlunos){
    console.log(`Nome: ${nomes[cont]} - Nota: ${notas[cont]}`);
    cont++;
}
console.log(`Media geral: ${(media/notas.length).toFixed(2)}`);