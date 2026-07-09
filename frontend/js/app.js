console.log("TaskBoard javaScript yüklendi.");

const form = document.querySelector("#task-form");

const taskTitleInput = document.querySelector("#task-title");

const prioritySelect = document.querySelector("#priority");

const descriptionTextarea = document.querySelector("#description");

const taskTableBody = document.querySelector("tbody");
console.log(taskTableBody);

const totalTasksElement = document.querySelector("#total-tasks");
const openTasksElement = document.querySelector("#open-tasks");
const completedTasksElement = document.querySelector("#completed-tasks");

console.log(form);

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitleInput.value;
    const priority = prioritySelect.value;
    const description = descriptionTextarea.value;

    console.log("Form gönderildi.");
    console.log(title);
    console.log(priority);
    console.log(description);

    taskTableBody.insertAdjacentHTML(
    "beforeend",
    `
    <tr>
        <td>${title}</td>
        <td><span class="badge badge-${priority}">${priority}</span></td>
        <td><span class="status-badge status-open">Açık</span></td>
        <td>${new Date().toLocaleDateString("tr-TR")}</td>
    </tr>
    `
);

totalTasksElement.textContent =
    taskTableBody.querySelectorAll("tr").length;

openTasksElement.textContent =
    taskTableBody.querySelectorAll(".status-open").length;

completedTasksElement.textContent =
    taskTableBody.querySelectorAll(".status-completed").length;

form.reset();
taskTitleInput.focus();
});

