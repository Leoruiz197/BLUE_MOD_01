var prompt = require('prompt-sync')();
let sensor = 0;

while (sensor <= 100) {
    sensor = prompt('sensor: ');
}

console.log("temperatura elevada");
