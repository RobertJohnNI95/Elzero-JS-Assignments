// Convert to arrow syntax
/*
function checker(zName) {
    return function (status) {
        return function (salary) {
            return status === "Available" ? `${zName}, My Salary Is ${salary}` : `I'm Not Avaialble`;
        };
    };
}
*/

checker = zName => status => salary => status === "Available" ? `${zName}, My Salary Is ${salary || "---"}` : `I'm Not Avaialble`;

console.log(checker("Osama")("Available")(4000)); // Osama, My Salary Is 4000
document.write(`<div>${checker("Osama")("Available")(4000)}<hr>`);

console.log(checker("Ahmed")("Not Available")()); // I'm Not Avaialble
document.write(`${checker("Ahmed")("Not Available")()}</div>`);