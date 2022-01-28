let fn = 0;
let a = 0;
let b = 1;

for (let k = 0; k < 10; k++) {
  console.log(fn);
  fn = b + a;
  b = a;
  a = fn;
}