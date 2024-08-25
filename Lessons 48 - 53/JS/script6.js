let start = 0;
let swappedName = "elZerO";

let after = "";

for (let i = start; i < swappedName.length; i++) {
    if (swappedName[i] == swappedName[i].toLowerCase()) {
        after += (swappedName[i].toUpperCase());
    } else {
        after += (swappedName[i].toLowerCase());
    }
}

// Output "ELzERo"

console.log(after);