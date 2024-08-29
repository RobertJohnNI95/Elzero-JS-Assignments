let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let newMix = mix.map(ele => typeof ele == 'string' ? ele : "")
    .reduce((acc, ele) => `${acc}${ele}`);

console.log(newMix);
document.write(`<div>${newMix}</div>`)
// Elzero