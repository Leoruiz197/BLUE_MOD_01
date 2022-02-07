const prompt = require('prompt-sync')();

function pedirPizza(pizza) {
    const sabor = prompt('Escolha o sabor da sua pizza: ');
    pizza(sabor);
}

function pizzaPronta(sabor) {
    console.log(`Sua pizza de ${sabor} está pronta.`);
}
  
pedirPizza(pizzaPronta);