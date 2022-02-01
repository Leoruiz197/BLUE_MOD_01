const prompt = require('prompt-sync')();
const valiMax = +prompt('Digite o ano maximo de validade: ');
const items = [];
const validades = [];
const vencidos = [];
let resposta = '';
const exibir = [];


while(resposta!='S'){
    items.push(prompt('Digite o item: '));
    validades.push(prompt('Digite a validade usando seu ANO de fabricação: '));
    resposta=prompt('Deseja parar? [S] ou [N]: ').toUpperCase();   
}
for(const validade of validades){
    if(validade<valiMax){
        vencidos.push(validades.indexOf(validade));
    }
}
console.log(vencidos);

for(const vencido in vencidos){
    exibir.push(items[vencido]);
}
console.log(exibir)