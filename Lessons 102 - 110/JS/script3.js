let startNum = 10;
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);
myDiv.innerHTML = startNum;
let countDown = setInterval(function () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML == "0") clearInterval(countDown);
}, 1000);
// As soon as the countdown reaches zero, it will stop.