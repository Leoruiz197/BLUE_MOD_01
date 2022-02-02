const prompt = require('prompt-sync')();
let total= 1;

cont1=0;
cont2=0;
cont3=0;

let total1=[];
let soma =0;

while(total!=0){
 total = +prompt('Digite o total gasto na loja: ');
console.log(`Você tem 3 Opções de pagamento:
1- Opção à vista com 10% de desconto;
2- Opção em 2X(preço da etiqueta);
3-Opção de 3 até 10x com 3% de juros ao mês(somente para comprar acima de R$100,00)`);

const opcao = prompt('Digite a Opção desejada:');
if(opcao==1){
    console.log(`Total da compra: R$ ${total} reais`);
    console.log(`Total da compra com desconto: R$ ${op1(total.toFixed(2))} reais`);
    cont1++;
    total1.push(total);
}else if(opcao==2){
    console.log(`Total da compra: R$ ${total} reais`)
    console.log(`Total das parcelas: 2x de R$ ${op2(total.toFixed(2))} reais cada`);
    cont2++;
    total1.push(total);
}else if(opcao==3){
    let parcelas = +prompt('Digite as parcelas de 3 até 10: ');
    console.log(`Total da compra: R$ ${total} reais`)
    console.log(`Total da compra parcelada: ${parcelas}x de R$${op3(total,parcelas.toFixed(2))} cada (com juros de 3% ao mês)`);
    cont3++;
}
    //total = +prompt('Digite o total gasto na loja: ');

if(total==0){
    break;
}
}
function op1(numero){
    let cont=0;
    resultado = numero - (numero *0.10);
    cont++
    return resultado;
}

function op2(numero){
    let cont2 =0;
    resultado = numero/2;
    cont2++;
    return resultado;
}

function op3(numero,parcelas){
        if(numero<100&&parcelas==3){
            resultado= numero/3;
            return resultado;
        }else if(numero<100 && parcelas==4){
            resultado=numero/4;
            return resultado;
        }else if(numero<100 && parcelas==5){
            resultado = numero/5;
            return resultado;
        }else if(numero<100 && parcelas==6){
            resultado=numero/6;
            return resultado;
        }else if(numero<100 && parcelas==7){
            resultado=numero/7;
            return resultado;
        }else if(numero<100 && parcelas==8){
            resultado=numero/8;
            return resultado;
        }else if(numero<100 && parcelas==9){
            resultado=numero/9;
            return resultado;
        }else if(numero<100 && parcelas==10){
            resultado=numero/10;
            return resultado;
        }
        else if(numero>=100 && parcelas==3){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/3;
            return resultado1;
        }else if(numero>=100 && parcelas==4){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/4;
            return resultado1;
        }else if(numero>=100 && parcelas==5){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/5;
            return resultado1;
        }else if(numero>=100 && parcelas==6){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/6;
            return resultado1;
        }else if(numero>=100 && parcelas==7){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/7;
            return resultado1;
        }else if(numero>=100 && parcelas==8){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/8;
            return resultado1;
        }else if(numero>=100 && parcelas==9){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/9;
            return resultado1;
        }else if(numero>=100 && parcelas==10){
            juro=(numero*0.03)*parcelas
            resultado = numero+juro
            total1.push(resultado)
            resultado1= resultado/10;
            return resultado1;
        }
    

}
for(let i=0;i<total1.length;i++){
    soma+=total1[i];


}
console.log(total1)
console.log(`Tivemos: 
${cont1} compras à vista
${cont2} compras no parcelado 2x
${cont3} compras no parcelado de 3x até 10!`);
console.log();
console.log(`Total do dia: R$ ${soma.toFixed(2)} reais`);