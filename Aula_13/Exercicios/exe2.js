const prompt = require('prompt-sync')();
const lista = [];

function Funcionario(nome, cargo, salario){
    this.nome = nome,
    this.cargo = cargo,
    this.salario = salario
}

let funcionario;

console.log("Registro de Funcionario");
let resp;
do{
    funcionario = new Funcionario(
        prompt("Digite o nome  "),
        prompt("Digite o cargo "),
        +prompt("Digite o Salario ")
    );
    lista.push(funcionario);
    resp = prompt("Deseja continuar cadastrando funcionarios? S ou N ");
}while(resp.toUpperCase() != "N" )

console.log(lista);