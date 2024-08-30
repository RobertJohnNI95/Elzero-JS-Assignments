// Create Your Object Here
let member = {
    name: "Elzero",
    age: 38,
    country: "Egypt",
    fullDetails: function () {
        return `My Name Is ${this.name}, My Age Is ${this.age}, I Live In ${this.country}`;
    }
};

console.log(member.name); // Elzero
document.write(`<div>${member.name}<hr>`);

console.log(member.age); // 38
document.write(`${member.age}<hr>`);

console.log(member.country); // Egypt
document.write(`${member.country}<hr>`);

console.log(member.fullDetails());
document.write(`${member.fullDetails()}</div>`);
// My Name Is Elzero, My Age Is 38, I Live in Egypt