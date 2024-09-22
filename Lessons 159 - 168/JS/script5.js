let start = performance.now();

for (let i = 1; i <= 99999; i++) {
    console.log(i);
}

let end = performance.now();

let difference = end - start;

console.log(`Loop Took ${Math.trunc(difference)} Milliseconds.`);