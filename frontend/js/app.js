console.log("TaskBoard javaScript yüklendi.");

let tasks = [];

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    const raw = localStorage.getItem("tasks");

    try {
        tasks = raw ? JSON.parse(raw) : [];
    } catch (error) {
        console.error("Görev verileri okunamadı:", error);
        tasks = [];
    }

    renderTasks(tasks);
    updateDashboard();
}

async function loadSampleTasks() {
    const response = await fetch("./data/tasks.json");

    if (!response.ok) {
        throw new Error("Örnek görevler yüklenemedi");
    }

    return await response.json();
}

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

const importTasksButton = document.querySelector("#import-tasks-button");

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

saveTasks();

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

saveTasks();

renderTasks(tasks);

updateDashboard();

});

importTasksButton.addEventListener("click", async function () {
    try {
        const sampleTasks = await loadSampleTasks();

        const newTasks = sampleTasks.filter(function (sampleTask) {
    return !tasks.some(function (task) {
        return task.id === sampleTask.id;
    });
});

if (newTasks.length === 0) {
    alert("Yeni örnek görev bulunamadı.");
    return;
}

        tasks = tasks.concat(newTasks);

saveTasks();
renderTasks(tasks);
updateDashboard();

alert(`${newTasks.length} örnek görev başarıyla eklendi.`);

        console.log("İçeri aktarılan görevler:", sampleTasks);
    } catch (error) {
        console.error("Görevler içeri aktarılamadı:", error);
    }
});

loadTasks();

loadSampleTasks()
    .then(function (sampleTasks) {
        console.log("Örnek görevler:", sampleTasks);
    })
    .catch(function (error) {
        console.error("Fetch hatası:", error);
    });