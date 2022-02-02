function somar(a, b, c) {
    console.log('A soma é: ', a + b + c);
}

const numeros = [10, 15, 20,50];

somar(...numeros);

const copiaDosNumeros = [...numeros,34,23]; // [10, 15, 20]

console.log(numeros);
console.log(copiaDosNumeros);