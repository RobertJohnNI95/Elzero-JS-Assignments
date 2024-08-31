let eNumber = document.forms[0].elements.value;
let eText = document.forms[0].texts.value;
let eType = document.forms[0].type.value;

document.forms[0].onsubmit = function (event) {
    event.preventDefault();
    eNumber = document.forms[0].elements.value;
    eText = document.forms[0].texts.value;
    eType = document.forms[0].type.value;

    document.getElementsByClassName("results")[0].innerHTML = `<${eType}>${eText}</${eType}>`.repeat(eNumber);
}