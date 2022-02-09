async function saudacao() {
    let promise = new Promise(resolve => {
      setTimeout(() => resolve('Olá!'), 2000);
    });

    let promise2 = new Promise(resolve => {
        setTimeout(() => resolve('Olá mundo!'), 4000);
      });

    let escrever = await promise;
    console.log(escrever);

    let escrever2 = await promise2;
    console.log(escrever2);
}

saudacao()