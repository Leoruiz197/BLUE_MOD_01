const lista = [];
const pessoa = {
    nome: 'Leonardo',
    idade: 24,
    cidade: 'São Paulo'
};

const pessoa2 = {
    nome: 'Duda',
    idade: 15,
    cidade: 'Londrina'
}

console.log(`nome: ${pessoa.nome} possui ${pessoa.idade} anos, mora na cidade: ${pessoa.cidade}`);

console.log(pessoa);
pessoa.nome = 'Leonardo Orabona';
pessoa.empresa = 'Blue';
console.log(pessoa);

console.log(lista);
lista.push(pessoa,pessoa2);
console.log(lista[1].nome);