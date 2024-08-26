function calculate(firstNum, secondNum, operation = "add") {
    if (secondNum === undefined) {
        console.log("Second Number Not Found"); return;
    }
    let result;
    switch (operation) {
        case "add": result = firstNum + secondNum; break;
        case "subtract": result = firstNum - secondNum; break;
        case "multiply": result = firstNum * secondNum; break;
        default: console.log("Invalid Operation"); return;
    }
    console.log(result);
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, 'add'); // 50
calculate(20, 30, 'subtract'); // -10
calculate(20, 30, 'multiply'); // 600