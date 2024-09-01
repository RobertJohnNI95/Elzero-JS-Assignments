for (let i = 0; i < document.body.children.length - 1; i++) {
    document.body.children[i].addEventListener('click', function() {console.log(`This Is ${this.tagName}`)});
}

function thisIs(ele) {
    console.log(`This Is ${ele}`);
}