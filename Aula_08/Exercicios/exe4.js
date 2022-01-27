const carros = ["onix","uno","ranger","maera turbo","versa","Up"];
const consumo = [8.5,13.2,5.6,4,12.3,16.1];
const consumo1000 = [];
const custo = [];
const gasolina = 5.5;

let economico = 0;
let carroEco = "";

for (const carroConsumo of consumo){
    if(carroConsumo > economico){
        economico = carroConsumo;
    }
    consumo1000.push(1000 / carroConsumo);
    custo.push((1000 / carroConsumo)*gasolina);
}

carroEco = carros[consumo.indexOf(economico)];

for(let x=0; x<carros.length; x++){
    console.log(`Carro: ${carros[x]}, consumo em litros/1000km ${consumo1000[x].toFixed(2)}, Custo em R$${custo[x].toFixed(2)}`);
}
console.log(`carro mais economico: ${carroEco}, consumo: ${economico}km/L`);
