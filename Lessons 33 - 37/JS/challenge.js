/*
    If Condition Challenge
*/

let a = 10;

if (a < 10) {
    console.log(10);
} else if (a >= 10 && a <= 40) {
    console.log("10 To 40");
} else if (a > 40) {
    console.log("> 40");
} else {
    console.log("Unknown");
}

// Write Previous Condition With Ternary If Syntax
a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("unknown");


let st = "Elzero Web School";

if ((st.length * 2).toString() === "34") {
    console.log("Good");
}

// W Position May Change
if (st.slice(st.indexOf("W"), st.indexOf("W") + 1).toString().toLowerCase() === "w") {
    console.log("Good");
}

if (typeof(st.length) !== "string") {
    console.log("Good");
}

if (typeof(st.length) === "number") {
    console.log("Good");
}

if (st.slice(st.indexOf("Elzero"), st.indexOf("o") + 1).repeat(2) === "ElzeroElzero") {
    console.log("Good");
}