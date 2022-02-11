const prompt = require('prompt-sync')();

function recebeNome() {
    return new Promise((resolve, reject) => {
        let nome = prompt('Digite o seu nome: ');
        resolve(nome);
      })
}

function escreveNome (parametro) {
    return new Promise((resolve, reject) => {
        parametro = parametro.toUpperCase();
		console.log(parametro);
        resolve(parametro);
    })
}

recebeNome()
  .then(escreveNome)
  .catch((err) => console.log('Alguma coisa deu errada no caminho...',err));