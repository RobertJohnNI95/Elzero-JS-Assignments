let myArray = ["E", "l", "z", ["e", "r"], "o"];

let flatted = myArray.reduce((acc, ele) => Array.isArray(ele) ? `${acc}${ele.reduce((acc2, ele2) => `${acc2}${ele2}`)}` : `${acc}${ele}`);

console.log(flatted);
document.write(`<div>${flatted}</div>`);
// Elzero