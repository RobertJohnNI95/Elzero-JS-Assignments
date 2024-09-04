let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
const {title: t, age, available: av, skills: [, skill]} = myFriends[chosen - 1];

console.log(t);
document.write(`<div>${t}<hr>`);

console.log(age);
document.write(`${age}<hr>`);

console.log(av ? "Available" : "Not Available");
document.write(`${av ? "Available" : "Not Available"}<hr>`);

console.log(skill);
document.write(`${skill}</div>`);

// If chosen === 1
/*
"Osama"
39
"Available"
"CSS"
*/

// If chosen === 2
/*
"Ahmed"
25
"Not Available"
"Django"
*/

// If chosen === 3
/*
"Sayed"
33
"Available"
"Laravel"
*/