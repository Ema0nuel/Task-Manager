import { loadPage } from "../routes";

export function createNewTask(form) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const TaskNameElement = document.getElementById("task-title");
        let value = TaskNameElement.value.trim();

        if (value) {
            tasks.push({
                id: crypto.randomUUID(),
                taskName: value,
                completed: false,
            });

            localStorage.setItem("tasks", JSON.stringify(tasks));
            loadPage("task");
        }
    });
}

export function deleteTask(button) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    button.addEventListener("click", () => {
        const id = button.getAttribute("data-task");
        tasks.forEach((task) => {
            if (id === task.id) {
                let newTasks = tasks.filter((task) => task.id !== id);
                localStorage.setItem("tasks", JSON.stringify(newTasks));
                loadPage("task");
            }
        });
    });
}

export function editTask(button) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    button.addEventListener("click", () => {
        const id = button.getAttribute("data-task");
        tasks.forEach(async (task) => {
            if (id === task.id) {
                await loadPage("taskDetail", id)
            }
        })
    })
};

export function updateTask(button, tasks) {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-task");
        tasks.forEach(async (task) => {
            if (id === task.id) {
                let obj = {
                    id: task.id,
                    taskName: task.taskName,
                    completed: true,
                }
                let newTasks = tasks.filter((task) => task.id !== id);
                newTasks.push(obj)
                localStorage.setItem("tasks", JSON.stringify(newTasks));
                loadPage("task");
            }
        })
    })
}