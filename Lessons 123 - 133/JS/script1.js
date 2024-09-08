let setOfNumbers = new Set([10]);
setOfNumbers.add(20);
setOfNumbers.add(setOfNumbers.size);

console.log(setOfNumbers);
document.write(`<div>Set(${setOfNumbers.size}) {${[...setOfNumbers]}}<hr>`)

console.log([...setOfNumbers][setOfNumbers.size - 1]);
document.write(`${[...setOfNumbers][setOfNumbers.size - 1]}</div>`);

// Needed Output
/*
Set(3) {10, 20, 2}
2
*/