async function erro() {
    try {
     var z = await Promise.reject('Deu erro!');
    } catch(e) {
     console.log(e);
    }
}
  
erro();