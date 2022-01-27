// Imprimir os 10 primeiros números da sequência de Fibonacci sem usar recursividade 
//Assim, a fórmula a seguir define a sequência: 
//Fn = Fn - 1 + Fn - 2

let f0 = 0;
let f1 = 1;
console.log(f0);
console.log(f1);
for (let i = 0; i < 8; i++) {
    let fi = f1 + f0;
    console.log(fi);
    f0 = f1;
    f1 = fi;
}
