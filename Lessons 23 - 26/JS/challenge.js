let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find the smallest number among the variables and return the integer
console.log(Math.trunc(Math.min(a, b, c, d)));

// Use a and d one time to get the output 10000
console.log(Math.ceil(d) ** 2 * a + a);

// Get integer "2" from variable d with 4 methods
console.log(Math.floor(d));
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(d.toFixed(0));

//Use variables b and d the following values
console.log((Math.floor(b) / Math.ceil(d)).toFixed(2).toString());   // 66.67 (string)
console.log(Math.ceil(Math.floor(b) / Math.ceil(d)));   // 67 (number)