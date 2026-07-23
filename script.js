const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const list = document.getElementById("taskList");
const themeBtn = document.getElementById("themeBtn");

addBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = input.value.trim();

    if (!taskText) return;

    const li = document.createElement("li");
    li.classList.add("task-item");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;

    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle("completed");
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    deleteBtn.addEventListener("click", () => {
        li.remove();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
}

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});