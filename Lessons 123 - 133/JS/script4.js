let theNumber = 100020003000;

console.log(+[...new Set(theNumber.toString())].sort().join(''));

// Use sets and spread operators
// Solution in one line only
// Do not use numbers
// Needed Output: 123
// It should be a number, not a string