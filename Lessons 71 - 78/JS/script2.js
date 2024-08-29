let myString = "EElllzzzzzzzeroo";

let filtered = myString.split("").filter((ele, index) => ele != myString[index - 1]).reduce((acc, ele) => `${acc}${ele}`);

console.log(filtered);
document.write(`<div>${filtered}</div>`);
// Elzero