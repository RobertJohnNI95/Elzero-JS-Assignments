function showPopUp() {
    document.querySelector(".pop-up").style.display = "flex";
}

function closePopUp() {
    document.querySelector(".pop-up").style.display = "none";
}

window.onload = setTimeout(showPopUp, 5000);

document.querySelector(".close-btn").onclick = closePopUp;