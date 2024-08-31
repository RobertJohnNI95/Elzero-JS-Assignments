for (let i = 0; i < document.images.length; i++) {
    if (document.images[i].hasAttribute("alt")) {
        document.images[i].setAttribute("alt", "Old");
    }
    else {
        document.images[i].setAttribute("alt", "Elzero New");
    }
}