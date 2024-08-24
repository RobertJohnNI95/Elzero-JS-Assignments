let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Check that the value of "needle" variable is included in the "haystack" array
// Print "Found" when found.
// Write 3 Solutions

// Solution 1
if (haystack.includes(needle)) {
    console.log("Found");
}

// Solution 2
if (haystack.indexOf(needle) != -1) {
    console.log("Found");
}

// Solution 3
if (haystack.lastIndexOf(needle) != -1) {
    console.log("Found");
}