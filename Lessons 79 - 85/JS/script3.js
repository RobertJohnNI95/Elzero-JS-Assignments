let a = 1;

let threeNums = {
    b: 2,
    c: 3,
    d: 4,
};

let twoNums = {
    e: 5,
    f: 6,
};

// Create Your Object Here in One Line
let finalObject = Object.assign({a}, threeNums, twoNums);

console.log(finalObject);
document.write(`<div>{ a: ${finalObject.a}, b: ${finalObject.b}, c: ${finalObject.c}, d: ${finalObject.d}, e: ${finalObject.e}, f: ${finalObject.f} }</div>`);

/*
    a: 1
    b: 2
    c: 3
    d: 4
    e: 5
    f: 6
*/