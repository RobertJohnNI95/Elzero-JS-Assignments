let chars = ["A", "B", "C", "D", "E", 10, 15, 6];

// Example 1 - Needed Output: ['A', 'B', 'C', 'A', 'B', 'C', 'D', 'E']
// Bring the numbers to the beginning
// Replace the numbers with the first letters, according to the number of "number" elements
let letters = chars.filter(e => typeof e == 'string');
let nums = chars.filter(e => typeof e == 'number');
nums = letters.slice(0, nums.length);
console.log([...nums,...letters]);

/******************************************************************/

chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];

// Example 2 - Needed Output: ['A', 'B', 'C', 'D', 'A', 'B', 'C', 'D', 'E']
letters = chars.filter(e => typeof e == 'string');
nums = chars.filter(e => typeof e == 'number');
nums = letters.slice(0, nums.length);
console.log([...nums,...letters]);

/******************************************************************/

chars = ["Z", "Y", "A", "D", "E", 10, 1];

// Example 3 - Needed Output: ["Z", "Y", "Z", "Y", "A", "D", "E"]
letters = chars.filter(e => typeof e == 'string');
nums = chars.filter(e => typeof e == 'number');
nums = letters.slice(0, nums.length);
console.log([...nums, ...letters]);