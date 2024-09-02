let startNum = 10;
let myDiv = document.createElement("div");
document.body.appendChild(myDiv);
myDiv.innerHTML = startNum;
let countDown = setInterval(function () {
    myDiv.innerHTML -= 1;
    if (myDiv.innerHTML == "0") location.href = "https://elzero.org";
}, 1000);
// As soon as the countdown reaches zero, you will be redirected to Elzero Academy website