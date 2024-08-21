// Print a random number from 0, 1, 2, 3, 4
let myNums = [0, 1, 2, 3, 4];
let myRand = Math.trunc(Math.random() * myNums.length);
console.log(myNums[myRand]);