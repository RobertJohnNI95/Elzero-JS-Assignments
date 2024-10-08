/*
    Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

/*
let names = function (...people) {
    return `String [${people.join("], [")}] => Done !`;
};
*/

let names = (...people) => `String [${people.join("], [")}] => Done !`;

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
document.write(`<div>${names("Osama", "Mohamed", "Ali", "Ibrahim")}<hr>`);
// NEEDED OUTPUT:
// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

/*
let calc = (one, two, ...nums) => one + two + nums[+!Array.isArray(nums)] + (nums[+Array.isArray(nums)] || 0);
*/

function calc (one, two, ...nums) {
    return one + two + nums[+!Array.isArray(nums)] + (nums[+Array.isArray(nums)] || 0);
}

console.log(calc(20, 50, 10)); // 80
document.write(`${calc(20, 50, 10)}</div>`);