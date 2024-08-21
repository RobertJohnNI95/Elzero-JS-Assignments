let a = "Elzero Web School";

// Include the methods (slice, charAt) in your solution. Required output is "Zero"
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// Use the H from the string and repeat it 8 times, so the output will be "HHHHHHHH"
console.log(a.charAt(a.length - 4).toUpperCase().repeat(8));

// Return the array [Elzero]
console.log(a.split(" ", 1));

// Use only "substr" method and template literals to output "Elzero School"
console.log(`${a.substr(0, 6)} ${a.substr(11)}`);

// Output the string in uppercase with first and last characters in lowercase "eLZERO WEB SCHOOl"
// Solution must be dynamic
console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase());