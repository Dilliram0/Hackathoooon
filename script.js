const input = document.getElementById("taskInput");
const button = document.querySelector("button");
const list = document.getElementById("taskList");

button.addEventListener("click", () => {

    const li = document.createElement("li");

    li.textContent = input.value;

    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "Delete";

    deleteBtn.onclick = () => {
        li.remove();
    };

    li.appendChild(deleteBtn);

    list.appendChild(li);

    input.value = "";
});
