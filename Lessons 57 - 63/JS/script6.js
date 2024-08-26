function multiply(...args) {
    if (args.length == 0) {
        console.log("-");
        document.write("<hr>-");
        return;
    }
    let result = 1;
    for (let i = 0; i < args.length; i++) {
        if (typeof args[i] != 'number') continue;
        result *= Math.trunc(args[i]);
    }
    console.log(result);
    document.write("<hr>" + result);
}

multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000