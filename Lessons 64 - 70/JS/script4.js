function specialMix(...data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] == 'number') sum += data[i];
        else if (!isNaN(Number.parseInt(data[i]))) sum += Number.parseInt(data[i]);
    }
    if (sum == 0) return `All Is Strings`;
    return sum;
}

document.write(`<div>`);

console.log(specialMix(10, 20, 30)); // 60
document.write(`${specialMix(10, 20, 30)}`)

console.log(specialMix("10Test", "Testing", "20Cool")); // 30
document.write(`<hr>${specialMix("10Test", "Testing", "20Cool")}`);

console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
document.write(`<hr>${specialMix("Testing", "10Testing", "40Cool")}`);

console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
document.write(`<hr>${specialMix("Test", "Cool", "Test")}`);

document.write(`</div>`);