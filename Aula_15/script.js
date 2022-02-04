const pessoa = { nome: 'Gabriel', idade: 20, cidade: 'Londrina' };
const pessoa2 = { nome: 'Thiago', empresa: 'Blue' };

const pessoaChaves = Object.keys(pessoa);

const pessoaValues = Object.values(pessoa);

const pessoaEntries = Object.entries(pessoa);

Object.assign(pessoa2, pessoa);

console.log(pessoaChaves);

console.log(pessoaValues);

console.log(pessoaEntries);

console.log(pessoa2);