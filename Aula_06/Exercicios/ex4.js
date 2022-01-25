let num = 0;
let min = 1;
let max = 7;
min = Math.ceil(min);
max = Math.floor(max);

let vezes = [];

let um = 0;
let dois = 0;
let tres = 0;
let quatro = 0;
let cinco = 0;
let seis = 0;

let cont = 0;

while(cont < 100){
    num = Math.floor(Math.random() * (max - min)) + min;
    vezes.push(num);
    if(num == 1){
        um++;
    }else if(num == 2){
        dois++;
    }
    else if(num == 3){
        tres++;
    }
    else if(num == 4){
        quatro++;
    }
    else if(num == 5){
        cinco++;
    }
    else if(num == 6){
        seis++;
    }
    cont++;
}

console.log(vezes);
console.log(`um - ${um} / dois - ${dois} / tres - ${tres}`);
console.log(`quatro - ${quatro} / cinco - ${cinco} / seis - ${seis}`);
