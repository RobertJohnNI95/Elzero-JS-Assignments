let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code To Output ["Z", "X", "D", "C", "B", "A"]
console.log(finalArr.concat(arrTwo.pop()).concat(arrOne.reverse()).concat(arrTwo.reverse()));