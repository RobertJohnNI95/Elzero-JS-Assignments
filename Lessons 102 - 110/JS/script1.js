let msg = prompt("Print Number From - To", "Example: 5-20");

let startNum = Number.parseInt(msg.slice(0, msg.indexOf("-")));
let endNum = Number.parseInt(msg.slice(msg.indexOf("-") + 1));

if (!isNaN(startNum) && !isNaN(endNum)) {
    if (startNum > endNum) {
    let tmp = startNum;
    startNum = endNum;
    endNum = tmp;
    }
    for (let i = startNum; i <= endNum; i++) {
        console.log(i);
        document.write(`${i}<hr>`);
    }
    document.getElementsByTagName("hr")[document.getElementsByTagName("hr").length - 1].remove();
} else {
    console.log("Input Error!");
    document.write("Input Error!");
}