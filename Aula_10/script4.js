const filmes = ["Jurassic Park", "O Senhor dos Aneis", "Harry Potter"];
const lista = [];

console.log(lista);

for (const filme of filmes) {
    console.log(filme);
    if(filme.length > 12){
        lista.push(filme)
    }
}

console.log(lista);