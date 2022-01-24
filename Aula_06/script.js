const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];

const numeros = [1, 2, 3, 4, 5];

//console.log(filmes[5]);

if(filmes[5] != undefined){
    console.log(filmes[5]);
}else{
    console.log("nao existe");
}

console.log(numeros[3]);
console.log(`meu filme favorito é ${filmes[2]}`);

console.log(filmes);
filmes[0] = "Mad Max";
console.log(filmes);
