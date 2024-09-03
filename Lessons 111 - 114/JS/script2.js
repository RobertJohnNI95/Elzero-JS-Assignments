let myName = document.getElementById("name-input");
let myAge = document.getElementById("age-input");
let myCountry = document.getElementById("country-input");
let myFavColor = document.getElementById("favcolor-select");

myName.value = sessionStorage.getItem("Name");
myAge.value = sessionStorage.getItem("Age");
myCountry.value = sessionStorage.getItem("Country");
myFavColor.value = sessionStorage.getItem("Favourite Color");

myName.onblur = function () {
    sessionStorage.setItem("Name", myName.value);
}

myAge.onblur = function () {
    sessionStorage.setItem("Age", myAge.value);
}

myCountry.onblur = function () {
    sessionStorage.setItem("Country", myCountry.value);
}

myFavColor.addEventListener("change", function () {
    sessionStorage.setItem("Favourite Color", myFavColor.value);
});