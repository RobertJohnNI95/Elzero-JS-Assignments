document.body.style.fontFamily = "Arial";
document.body.style.backgroundColor = "#ECECEC";
document.body.style.margin = 0;

// Start Header
let myHeader = document.createElement("header");
myHeader.style.cssText = "background-color: white; display: flex; justify-content: space-between; align-items: center; padding: 0 20px;";

myHeader.appendChild(document.createElement("h1")).innerHTML = "Elzero";
myHeader.getElementsByTagName("h1")[0].style.cssText = "font-size: 30px; color: #26ad6f;";

let navBar = myHeader.appendChild(document.createElement("ul"));
navBar.style.cssText = "list-style: none; display: flex; gap: 15px; color: gray;";
let navList = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < navList.length; i++) {
    navBar.appendChild(document.createElement("li")).innerHTML = navList[i];
    navBar.getElementsByTagName("li")[i].style.cursor = "pointer";
}

document.body.appendChild(myHeader);
// End Header

// Start Body
let mainBody = document.body.appendChild(document.createElement("section"));
mainBody.style.cssText = "display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 20px;";

for (let i = 1; i <= 15; i++) {
    mainBody.appendChild(document.createElement("div")).innerHTML = `<h2>${i}</h2><h3>Product</h3>`;
    mainBody.getElementsByTagName("div")[i - 1].className = "box";
    mainBody.getElementsByClassName("box")[i - 1].style.cssText = "background-color: white; text-align: center; padding: 15px;";

    mainBody.getElementsByClassName("box")[i - 1].getElementsByTagName("h2")[0].style.cssText = "font-size: 35px; margin: 5px; font-weight: 100;";
    mainBody.getElementsByClassName("box")[i - 1].getElementsByTagName("h3")[0].style.cssText = "font-size: 20px; color: gray; margin: 5px;";
}
// End Body

// Start Footer
let myFooter = document.body.appendChild(document.createElement("footer"));
myFooter.innerHTML = `&copy; Copyright 2021`;
myFooter.style.cssText = "background-color: #23A96E; color: white; text-align: center; padding: 15px;";
// End Footer