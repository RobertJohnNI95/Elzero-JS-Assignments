let nums = [2, 12, 11, 5, 10, 1, 99];

let result = nums.reduce((acc, ele) => ele % 2 == 0 ? acc * ele : acc + ele, 1);

console.log(result);
document.write(`<div>${result}</div>`);
// 500