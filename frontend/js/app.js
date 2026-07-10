console.log("TaskBoard javaScript yüklendi.");

let tasks = [];

function createTask(title, priority, description) {
    return {
        id: Date.now(),
        title: title,
        priority: priority,
        description: description,
        status: "open",
        createdAt: new Date().toLocaleDateString("tr-TR")
    };
}

const form = document.querySelector("#task-form");

const taskTitleInput = document.querySelector("#task-title");

const prioritySelect = document.querySelector("#priority");

const descriptionTextarea = document.querySelector("#description");

const taskTableBody = document.querySelector("tbody");
console.log(taskTableBody);

const totalTasksElement = document.querySelector("#total-tasks");
const openTasksElement = document.querySelector("#open-tasks");
const completedTasksElement = document.querySelector("#completed-tasks");

const filterAllButton = document.querySelector("#filter-all");
const filterOpenButton = document.querySelector("#filter-open");
const filterCompletedButton = document.querySelector("#filter-completed");

console.log(form);

function renderTasks(items) {

    taskTableBody.innerHTML = "";

    items.forEach(function (task) {

        taskTableBody.insertAdjacentHTML(
            "beforeend",
            `
            <tr>
                <td>${task.title}</td>
                <td><span class="badge badge-${task.priority}">${task.priority}</span></td>
               <td>
    <span class="status-badge status-${task.status}">
        ${task.status === "completed" ? "Tamamlandı" : "Açık"}
    </span>
</td>
                <td>${task.createdAt}</td>

                <td>
    <button
        class="complete-button"
        data-id="${task.id}">
        Tamamla
    </button>
</td>
            </tr>
            `
        );

    });

}

function updateDashboard() {

    totalTasksElement.textContent = tasks.length;

    openTasksElement.textContent = tasks.filter(function (task) {
        return task.status === "open";
    }).length;

    completedTasksElement.textContent = tasks.filter(function (task) {
        return task.status === "completed";
    }).length;

}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = taskTitleInput.value;
    const priority = prioritySelect.value;
    const description = descriptionTextarea.value;

    const newTask = createTask(title, priority, description);

console.log(newTask);

tasks.push(newTask);

console.log("tasks dizisi:",tasks);

renderTasks(tasks);


    console.log("Form gönderildi.");
    console.log(title);
    console.log(priority);
    console.log(description);


    updateDashboard();

form.reset();
taskTitleInput.focus();
});

filterAllButton.addEventListener("click", function () {
    renderTasks(tasks);
});

filterOpenButton.addEventListener("click", function () {

    const openTasks = tasks.filter(function (task) {
        return task.status === "open";
    });

    renderTasks(openTasks);

});

filterCompletedButton.addEventListener("click", function () {

    const completedTasks = tasks.filter(function (task) {
        return task.status === "completed";
    });

    renderTasks(completedTasks);

});

taskTableBody.addEventListener("click", function (event) {

    if (!event.target.classList.contains("complete-button")) {
        return;
    }

    const taskId = Number(event.target.dataset.id);

    const task = tasks.find(function (item) {
    return item.id === taskId;
});

task.status = "completed";

renderTasks(tasks);

updateDashboard();

});