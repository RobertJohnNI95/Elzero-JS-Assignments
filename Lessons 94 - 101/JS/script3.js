document.querySelector("p").remove();

document.querySelector(".our-element").before(document.createElement("div"));
let startDiv = document.getElementsByTagName("div")[0];
startDiv.className = "start";
startDiv.title = "Start Element";
startDiv.setAttribute("data-value", "Start");
startDiv.innerHTML = "Start";

document.querySelector(".our-element").after(document.createElement("div"));
let endDiv = document.getElementsByTagName("div")[2];
endDiv.className = "end";
endDiv.title = "End Element";
endDiv.setAttribute("data-value", "End");
endDiv.innerHTML = "End";