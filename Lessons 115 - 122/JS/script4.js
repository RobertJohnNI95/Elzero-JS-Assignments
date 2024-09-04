const member = {
    age: 30,
    working: false,
    country: "Egypt",
    hobbies: ["Reading", "Swimming", "Programming"],
};

// Write Your Destructuring Assignment Here
const {age: a, working: w, country: c, hobbies: [h1, , h3]} = member;

console.log(`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`);
document.write(`<div>${`My Age Is ${a} And Iam ${w ? "" : "Not"} Working`}<hr>`);
// My Age Is 30 And Iam Not Working

console.log(`I Live in ${c}`);
document.write(`${`I Live in ${c}`}<hr>`);
// I Live in Egypt

console.log(`My Hobbies: ${h1} And ${h3}`);
document.write(`${`My Hobbies: ${h1} And ${h3}`}</div>`)
// My Hobbies: Reading And Programming