function primeiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        console.log(`Essa é a primeira função, ela escreve: ${parametro}`);
 
        resolve(parametro);
    });
}

function segundaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro + 10;

        console.log(`Essa vai adicionar 10, totalizando: ${novoParametro}`);
 
        resolve(novoParametro);
    });
}

function terceiraFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro * 2;

        console.log(`Essa é a terceira função, ela dobra o valor: ${novoParametro}`);      

        resolve(novoParametro);
    });
}

function quartaFuncao(parametro) {
    return new Promise((resolve, reject) => {
        const novoParametro = parametro - 15;
 
        console.log(`Essa é a quarta função, subtraindo 15: ${novoParametro}`);
    
        resolve(novoParametro);
    });
}

primeiraFuncao(10)
    .then(segundaFuncao)
    .then(terceiraFuncao)
    .then(quartaFuncao);