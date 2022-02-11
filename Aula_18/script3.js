async function erro() {
    try {
     var z = await Promise.reject('Deu erro!');
     console.log(z);
     console.log("teste");
    } catch(e) {
        console.log(e);
    }
}
  
erro();