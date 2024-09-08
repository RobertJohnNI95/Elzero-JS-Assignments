let theName = "Elzero";

// Needed Output: ['E', 'l', 'z', 'e', 'r', 'o']
// Use 5 methods

// Method 1
console.log(Array.from(theName));

// Method 2
console.log([...theName]);

//Method 3
console.log(theName.split(''));

// Method 4
console.log(Object.assign([], theName));

// Method 5
console.log([...new Set(theName)]);