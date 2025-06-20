import { updateTask } from "../components/ManageTask";
import { resetPage } from "../util/reset"

const taskDetail = (taskId) => {
    resetPage("Task Detail");
    let taskData;

    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks && tasks.forEach((task) => {
        if (task.id === taskId) {
            taskData = task;
        }
    })

    function pageEvents() {
        const updateBtn = document.getElementById("update-btn");
        updateBtn && updateTask(updateBtn, tasks)
    }
    return ({
        html: `
        <div class="min-h-screen">
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in">
            <a href="/task" data-nav class="text-blue-600 mb-4 inline-block hover:underline">&larr; Back to Tasks</a>
            <h2 class="text-2xl font-bold mb-2 text-blue-800 task-title">
                ${taskData.taskName}
            </h2>
            <p class="task-desc text-gray-700 mb-3">Detailed description...</p>
            ${taskData.completed ? `<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-green-200 text-green-800 status-badge"
                >Completed</span>` : `<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-yellow-200 text-yellow-800 status-badge"
                >Pending</span>`}
                ${taskData.completed ? ``: `
                <button id="update-btn" class="bg-blue-600 text-white px-5 py-1 rounded-md hover:bg-blue-700 transition" data-task="${taskData.id}">
                        Completed <i class="fas fa-check-circle ml-1"></i>
                </button>
                `}
        </div>
    `,
        pageEvents,
    })
}

export default taskDetail