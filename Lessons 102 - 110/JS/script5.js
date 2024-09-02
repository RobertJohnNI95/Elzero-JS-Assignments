let startNum = 10;
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);
myDiv.innerHTML = startNum;
let countDown = setInterval(function () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML == "5") window.open("https://elzero.org", "", "width=400, height=450, left=100");
    if (myDiv.innerHTML == "0") clearInterval(countDown);
}, 1000);
// As soon as the countdown reaches five, Elzero website will opened in a new window
// As soon as the countdown reaches zero, the countdown will stop