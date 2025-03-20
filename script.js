document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTaskButton");
    const taskList = document.getElementById("taskList");
    
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") return;
        
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.innerHTML = `<span>${taskText}</span><button class="delete-button">X</button>`;
        
        taskItem.querySelector(".delete-button").addEventListener("click", function () {
            taskItem.remove();
        });
        
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
    
    addTaskButton.addEventListener("click", addTask);
    taskInput.addEventListener("keypress", function(event) {
        if (event.key === "Enter") addTask();
    });
});