let mySkills = ["HTML", "CSS", "JavaScript", ["PHP", "Python", ["Django", "Laravel"]]];

// Write Your Destructuring Assignment Here
const [a, b, c, [d, e, [f, g]]] = mySkills;

console.log(`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`);
document.write(`<div>${`My Skills: ${a}, ${b}, ${c}, ${d}, ${e}, ${f}, ${g}`}</div>`);
// My Skills: HTML, CSS, JavaScript, PHP, Python, Django, Laravel