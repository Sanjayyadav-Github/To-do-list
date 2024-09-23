const taskInput = document.getElementById("taskinput");
const taskList = document.getElementById("tasklist");

function addTask() {
    if (taskInput.value === "") {
        alert("please enter a task!");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = taskInput.value;
        taskList.appendChild(li);
        let delbtn = document.createElement("button");
        
        const node = document.createTextNode("Delete");

        delbtn.appendChild(node);

        delbtn.style.color = "white";
        delbtn.style.fontSize = "1rem";
        delbtn.style.backgroundColor = "red";
        delbtn.style.height = "35px";
        delbtn.style.width = "60px";
        delbtn.style.padding = "5px 0";
        delbtn.style.position = "absolute";
        delbtn.style.right = "-30px";
        delbtn.style.top = "0px";
        li.appendChild(delbtn);
    }
    taskInput.value = "";

    saveTask();

}

taskList.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");

        saveTask();
    }
    else if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();

        saveTask();

    }
});

function saveTask() {
    localStorage.setItem("data", taskList.innerHTML);
}

function showTask() {
    taskList.innerHTML = localStorage.getItem("data");
}
showTask();