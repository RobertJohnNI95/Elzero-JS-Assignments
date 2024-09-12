let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";

console.log(specialNames.match(/\bOs\d*O\b/ig));
document.write(`<div>[${specialNames.match(/\bOs\d*O\b/ig)}]</div>`);

// Output: ['Os10O', 'OsO', 'Os100O']