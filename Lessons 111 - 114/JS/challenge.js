const addInput = document.querySelector(".input");
const addButton = document.querySelector(".add");
const myTasks = document.querySelector(".tasks");
let taskList = JSON.parse(localStorage.getItem("Tasks")) || [];

const createTaskElement = (taskName) => {
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";
    taskDiv.innerHTML = `<span class="task-name">${taskName}</span>`;
    
    const delBtn = document.createElement("span");
    delBtn.className = "del-btn";
    delBtn.textContent = "Delete";
    delBtn.onclick = () => {
        taskList = taskList.filter(task => task !== taskName);
        localStorage.setItem("Tasks", JSON.stringify(taskList));
        taskDiv.remove();
    };
    
    taskDiv.appendChild(delBtn);
    return taskDiv;
};

if (taskList.length) {
    taskList.forEach(task => myTasks.appendChild(createTaskElement(task)));
}

addButton.onclick = (event) => {
    event.preventDefault();
    const taskName = addInput.value;
    
    if (!taskName) {
        alert("Cannot enter an empty task.");
    } else if (taskList.includes(taskName)) {
        alert("This task is already in the list");
    } else {
        taskList.push(taskName);
        localStorage.setItem("Tasks", JSON.stringify(taskList));
        myTasks.appendChild(createTaskElement(taskName));
        addInput.value = "";
    }
};
