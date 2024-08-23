// Test Case 1
var num = 9; // "009"
let p = num < 10 ? `00${num}` : num >= 10 && num < 100 ? `0${num}` : num >= 100 ? `${num}` : `unknown`;
console.log(p);

// Test Case 2
num = 20; // "020"
p = num < 10 ? `00${num}` : num >= 10 && num < 100 ? `0${num}` : num >= 100 ? `${num}` : `unknown`;
console.log(p);

// Test Case 3
num = 110; // "110"
p = num < 10 ? `00${num}` : num >= 10 && num < 100 ? `0${num}` : num >= 100 ? `${num}` : `unknown`;
console.log(p);