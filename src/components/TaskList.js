export function renderTaskList() {
    const tasks = JSON.parse(localStorage.getItem("tasks"))
    let html = ""

    if (tasks && tasks.length !== 0) {
        tasks.forEach((task) => {
            html += `
            <div class="bg-white p-4 rounded-md shadow-md flex justify-between items-start transition transform hover:scale-[1.01] fade-in" data-task="${task.id}">
                <div>
                <h3 class="text-lg font-semibold task-title text-gray-800">
                ${task.taskName}
                </h3>
                <p class="text-sm text-gray-600 mt-1 task-desc">Description here...</p>
                ${task.completed ? `<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-green-200 text-green-800 status-badge"
                >Completed</span>` : `<span class="text-xs mt-2 inline-block px-2 py-1 rounded bg-yellow-200 text-yellow-800 status-badge"
                >Pending</span>`}
            </div>
            <div class="space-x-2 flex-shrink-0">
                <button class="edit-btn text-blue-500 hover:text-blue-700 transition" data-task="${task.id}">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="delete-btn text-red-500 hover:text-red-700 transition" data-task="${task.id}">
                    <i class="fas fa-trash-alt"></i>
                </button>
            </div>
            </div>
            `
        })
    } else {
        html = `<div class="text-center">No Task!</div>`
    }

    return html
}