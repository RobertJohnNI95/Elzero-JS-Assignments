let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);  //100
console.log(++a + -b + +c++ - -a++ + +a);  //100
console.log(--c + +b + --a * +b++ - +b * a + --a - +true);  //100

/*****************************************************************/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(+e * -d);  //2000
console.log(-d + ++g * ++e + ++f);  //173