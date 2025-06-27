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

/**
 * Updates a task by setting its completed status to true.
 * 
 * @param {HTMLElement} button The button element that triggers the update.
 * @param {Object[]} tasks The array of tasks.
 */
export function updateTask(button, tasks) {
    button.addEventListener("click", () => {
        const id = button.getAttribute("data-task");
        const taskToUpdate = tasks.find(task => task.id === id);

        if (taskToUpdate) {
            const updatedTask = { ...taskToUpdate, completed: true };
            const updatedTasks = tasks.map(task => task.id === id ? updatedTask : task);

            localStorage.setItem("tasks", JSON.stringify(updatedTasks));
            loadPage("task");
        }
    })
}