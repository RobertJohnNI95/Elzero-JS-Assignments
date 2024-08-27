// Convert the following functions to arrow function syntax

/*
function itsMe() {
    return `I'm A Normal Function`;
}
*/

let itsMe = () => `I'm A Normal Function`;

console.log(itsMe()); // I'm A Normal Function
document.write(`<div>${itsMe()}<hr>`);

/************************************************/

/*
function urlCreate(protocol, web, tld) {
    return `${protocol}://www.${web}.${tld}`;
}
*/

let urlCreate = (protocol, web, tld) => `${protocol}://www.${web}.${tld}`;

console.log(urlCreate("https", "elzero", "org")); // https://www.elzero.org
document.write(`${urlCreate("https", "elzero", "org")}</div>`);