let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let negative_nums = numsAndStrings.filter(ele => typeof ele == 'number').map(ele => -ele);

console.log(negative_nums);
document.write(`<div>[${negative_nums}]</div>`);
// [-1, -10, 10, 20, -5, -3]