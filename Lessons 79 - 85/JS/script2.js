// Method One
let objMethodOne = {
    property: "Method One"
};

console.log(objMethodOne.property); // "Method One"
document.write(`<div>${objMethodOne.property}<hr>`);

// Method Two
let objMethodTwo = new Object();
objMethodTwo.property = "Method Two";

console.log(objMethodTwo.property); // "Method Two"
document.write(`${objMethodTwo.property}<hr>`);

// Method Three
let objMethodThree = Object.create({property: "Method Three"});

console.log(objMethodThree.property); // "Method Three"
document.write(`${objMethodThree.property}<hr>`);

// Method Four
let objMethodFour = Object.assign({property: "Method Four"});

console.log(objMethodFour.property); // "Method Four"
document.write(`${objMethodFour.property}</div>`);