let div1 = document.getElementsByClassName("one")[0];
let div2 = document.getElementsByClassName("two")[0];

let tmp = div1.title;
div1.title = div2.title;
div2.title = tmp;

tmp = div1.innerHTML;
div1.innerHTML = div2.innerHTML;
div2.innerHTML = tmp + " 2";