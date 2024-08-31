// Select the div element with 15 methods

let selector;

// Method #1
selector = document.getElementById("elzero");
console.log(selector);

// Method #2
selector = document.getElementsByClassName("element")[0];
console.log(selector);

// Method #3
selector = document.getElementsByTagName("div")[0];
console.log(selector);

// Method #4
selector = document.getElementsByName("js")[0];
console.log(selector);

// Method #5
selector = document.querySelector("#elzero");
console.log(selector);

// Method #6
selector = document.querySelector(".element");
console.log(selector);

// Method #7
selector = document.querySelector("div");
console.log(selector);

// Method #8
selector = document.querySelector("[name = 'js']");
console.log(selector);

// Method #9
selector = document.querySelectorAll("#elzero")[0];
console.log(selector);

// Method #10
selector = document.querySelectorAll(".element")[0];
console.log(selector);

// Method #11
selector = document.querySelectorAll("div")[0];
console.log(selector);

// Method #12
selector = document.querySelectorAll("[name = 'js']")[0];
console.log(selector);

// Method #13
selector = document.body.firstElementChild;
console.log(selector);

// Method #14
selector = document.body.firstElementChild;
console.log(selector);

// Method #15
selector = document.body.childNodes[1];
console.log(selector);