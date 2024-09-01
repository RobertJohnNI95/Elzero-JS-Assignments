let addField = document.querySelector(".classes-to-add");
let removeField = document.querySelector(".classes-to-remove");
let current = document.querySelector("[title = 'Current']");
let cList = document.querySelector(".classes-list > div");
if (cList.innerHTML == "") cList.innerHTML = `No Classes To Show`;

addField.onblur = function () {
    let toAdd = addField.value.toLowerCase().split(" ").sort();
    toAdd = toAdd.filter((ele, index) => ele !== "" && !/^\d/.test(ele) && !cList.innerHTML.includes(ele) && toAdd.indexOf(ele) == index);
    /*
    CLASSES TO REMOVE:
        - Empty classes
        - Classes that start with numbers
        - Repeated classes
    */
    if (cList.innerHTML == `No Classes To Show`) cList.innerHTML = "";
    for (let i = 0; i < toAdd.length; i++) {
        cList.innerHTML += `<span class="${toAdd[i]}">${toAdd[i]}</span>`;
        current.classList.add(toAdd[i]);
    }
    addField.value = "";
}

removeField.onblur = function () {
    let toRemove = removeField.value.toLowerCase().split(" ").sort();
    toRemove = toRemove.filter(ele => ele !== "" && !/^\d/.test(ele));
    for (let i = 0; i < toRemove.length; i++) {
        current.classList.remove(toRemove[i]);
        if (cList.innerHTML.includes(`<span class="${toRemove[i]}">${toRemove[i]}</span>`)) {
            cList.removeChild(document.querySelector(`.${toRemove[i]}`));
        }
    }
    if (cList.innerHTML == "") cList.innerHTML = `No Classes To Show`;
    removeField.value = "";
}