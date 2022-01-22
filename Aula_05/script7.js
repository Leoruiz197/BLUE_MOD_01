let num = 0;
let num2 = 0;

while (num <= 3) {
  console.log('Laço externo: ', num);
  num++;
  while (num2 <= 5 ){
    if (num2 == 3){
      break;
    }
    console.log('Laço interno: ', num2);
    num2++;
    }
}