let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// Needed Output: [1, 2, 3, 4, 5, 6]
// Merge the two arrays using three different ways

// Method 1
console.log([...numsOne, ...numsTwo]);

// Method 2
console.log(numsOne.concat(numsTwo));

// Method 3
numsOne.push(...numsTwo);
console.log(numsOne);