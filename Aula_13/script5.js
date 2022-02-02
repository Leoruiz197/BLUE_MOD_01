const pessoa = {
    nome: 'Gabriel',
    idade: 17,
    cidade: 'Londrina',
    empresa: 'Blue',
    interesses: ['Programação', 'Jogos', 'Música', 'Livros', 'Filmes'],
    envelhecer: function() {
        this.idade++;
    },
    rejuvenescer: function() {
        this.idade--;
    },
    testeMaiorIdade: function(){
        if(this.idade > 17){
            return "maior idade";
        }else{
            return "menor de idade";
        }
    },
    testeArrow: somar = (a, b) => {
        const soma = a + b;
        return soma;
    }
};

console.log(pessoa.idade);

pessoa.envelhecer();
console.log(pessoa.idade);
console.log(pessoa.testeMaiorIdade());
pessoa.rejuvenescer();
console.log(typeof(pessoa.idade));

console.log(pessoa.testeArrow(15,20));