function alteraNome(parametro) {
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();

        resolve(parametro);
    });
}

function escreveNome (parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Aqui está o nome em MAIÚSCULAS: ${parametro}`);

        resolve(parametro);
    });
}

alteraNome("blue")
    .then(escreveNome)
    .catch((err) => console.log('Alguma coisa deu errada no caminho...', err));