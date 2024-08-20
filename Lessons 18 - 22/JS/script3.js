let num = "10";

// Solution One
console.log(+num + +num);

// Solution Two
console.log(+num++ + --num);


// Solution Three
console.log(+num + -num * -true);

// Solution Four
console.log(+num * +num - +num-- * --num);

// In every solution, result must be 20