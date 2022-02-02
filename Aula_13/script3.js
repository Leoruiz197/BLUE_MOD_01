const pessoa = {
    nome: 'Leonardo',
    idade: 24,
    cidade: 'São Paulo',
    interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes']
};

console.log(pessoa.interesses);

console.log(pessoa.interesses[1]);

const lista = ['teste', 'teste2'];

pessoa.teste = lista;
console.log(pessoa);

pessoa.teste[1] = 'ja testei';
console.log(pessoa);