for (let x=0 ; x < 9; x++) {
    console.log(x);
}

// Usando for sem inicializar a variável de controle (ela é declarada antes)
let i = 0;

for ( ; i < 9; i++) {
    console.log(i);
}

// Usando for sem testar uma condição (é necessário usar um break para não entrar em loop infinito)
for (let i = 0; ; i++) {
   console.log(i);

   if (i > 3) {
       break;
   }
}

// Usando for sem incremento no final (o incremento é feito na execução do código)
for (let i = 0; i < 9; ) {
    console.log(i);

    i++;
}

// Usando for sem nenhuma expressão
 i = 0;

for ( ; ; ) {
    if (i > 3) {
      break;
    }
 
    console.log(i);

    i++;
}