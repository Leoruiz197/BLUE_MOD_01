async function soma10(num) {
    let promise = new Promise(resolve => {
      setTimeout(() => resolve(num + 10), 5000);
    });

    let resultado = await promise;
    console.log(resultado);
}

soma10(40);