import { resetPage } from "../util/reset"
import Navbar from "../components/Navbar"
import { createNewTask, deleteTask, editTask } from "../components/ManageTask";
import { renderTaskList } from "../components/TaskList";

const task = () => {
    resetPage("Task");

    const { html: NavMenu } = Navbar()
    function pageEvents() {
        const form = document.getElementById("task-form");
        const deleteBtns = document.querySelectorAll(".delete-btn");
        const editBtns = document.querySelectorAll(".edit-btn")

        form && createNewTask(form);
        deleteBtns && deleteBtns.forEach((btn) => {
            deleteTask(btn)
        })

        editBtns && editBtns.forEach((btn) => {
            editTask(btn)
        })
        
    }
    return ({
        html: `
        <div class="min-h-screen mb-6">
            ${NavMenu}
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in">
                <h2 class="text-2xl font-semibold mb-4 text-blue-700">Your Tasks</h2>
                <form id="task-form" class="mb-6 flex gap-3 flex-wrap items-center">
                    <input
                    type="text"
                    id="task-title"
                    placeholder="Task title"
                    class="flex-1 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400"
                    minlength="3"
                    maxlength="100"
                    required
                    />
                    <button
                    type="submit"
                    class="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                    Add <i class="fas fa-plus ml-1"></i>
                    </button>
                </form>

                <div class="mb-4 flex justify-between items-center flex-wrap gap-2">
                    <div class="space-x-2">
                    <button
                        class="filter-btn px-3 py-1 rounded-full bg-gray-300 text-black hover:bg-gray-400 transition">
                        All
                    </button>
                    <button
                        class="filter-btn px-3 py-1 rounded-full bg-yellow-300 hover:bg-yellow-400 text-yellow-800">
                        Pending
                    </button>
                    <button
                        class="filter-btn px-3 py-1 rounded-full bg-green-300 hover:bg-green-400 text-green-700" id="test"
                    >
                        Completed
                    </button>
                    </div>
                    <input
                    id="task-search"
                    type="text"
                    placeholder="Search..."
                    class="border px-3 py-2 rounded-md shadow-sm"
                    />
                </div>

                <div id="task-list" class="grid gap-4 px-3 py-5 rounded-xl border border-solid border-white">
                    ${renderTaskList()}
                </div>
            </div>
        </div>
    `,
        pageEvents,
    })
}

export default task