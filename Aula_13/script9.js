const lista = [];

function Pessoa(nome, idade, sexo) {
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
}

let pessoa = new Pessoa("leo",24,'M');
lista.push(pessoa);

pessoa = new Pessoa("duda",15,'F');
lista.push(pessoa);

console.log(lista);