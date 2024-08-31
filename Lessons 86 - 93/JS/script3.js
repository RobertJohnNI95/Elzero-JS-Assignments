let usd;

document.forms[0].dollar.oninput = function () {
    usd = document.forms[0].dollar.value;
    if (document.forms[0].dollar.value === "") {usd = 0;}
    document.getElementsByClassName("result")[0].innerHTML = `{${usd}} USD Dollar = {${usd * 15.6}} Egyptian Pound`;
}