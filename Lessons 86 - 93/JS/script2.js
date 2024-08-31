let myImgs = document.images;

for (let i = 0; i < myImgs.length; i++) {
    document.images[i].setAttribute("src", "https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    document.images[i].setAttribute("alt", "Elzero Logo");
}