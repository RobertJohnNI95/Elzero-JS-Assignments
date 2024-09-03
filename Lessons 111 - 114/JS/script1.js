let fontList = ["Open Sans", "Cairo", "Roboto"];
let fontBox = document.getElementById("font-select");
fontList.forEach(ele => {
    let newOption = fontBox.appendChild(document.createElement("option"));
    newOption.value = newOption.innerHTML = ele;
});

let colorList = ["Black", "Gray", "Red", "Green", "Blue", "Purple"];
let colorBox = document.getElementById("color-select");
colorList.forEach(ele => {
    let newOption = colorBox.appendChild(document.createElement("option"));
    newOption.value = newOption.innerHTML = ele;
});

let sizeList = [];
for (let i = 16; i <= 30; i++) sizeList.push(i);
let sizeBox = document.getElementById("size-select");
sizeList.forEach(ele => {
    let newOption = sizeBox.appendChild(document.createElement("option"));
    newOption.value = newOption.innerHTML = ele;
});

fontBox.value = localStorage.getItem("fFont") || fontBox.firstElementChild.value;
document.body.style.fontFamily = fontBox.value;

colorBox.value = localStorage.getItem("fColor") || colorBox.firstElementChild.value;
document.body.style.color = colorBox.value;

sizeBox.value = localStorage.getItem("fSize") || sizeBox.firstElementChild.value;
document.body.style.fontSize = `${sizeBox.value}px`;

fontBox.addEventListener("change",  function () {
    localStorage.setItem("fFont", fontBox.value);
    document.body.style.fontFamily = fontBox.value;
});

colorBox.addEventListener("change", function () {
    localStorage.setItem("fColor", colorBox.value);
    document.body.style.color = colorBox.value;
});

sizeBox.addEventListener("change", function () {
    localStorage.setItem("fSize", sizeBox.value);
    document.body.style.fontSize = `${sizeBox.value}px`;
});