/*
    Destructuring
    - Challenge
*/

let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },   // 1
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },   // 2
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },   // 3
];

const {title: t, age, available: av, skills: [, skill]} = myFriends[chosen - 1];

console.log(t);
document.write(`<div>${t}<hr>`);

console.log(age);
document.write(`${age}<hr>`);

console.log(av ? "Available" : "Not Available");
document.write(`${av ? "Available" : "Not Available"}<hr>`);

console.log(skill);
document.write(`${skill}</div>`);