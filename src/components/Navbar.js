const Navbar  = () => {
    return ({
        html: `
             <nav class="bg-white shadow px-6 py-4 flex items-center justify-between sticky top-0 z-10">
                <div class="text-2xl font-bold text-blue-700 flex items-center gap-2">
                <i class="fas fa-tasks"></i>
                TaskManager
                </div>
                <div class="space-x-6 text-base">
                <a
                    href="/"
                    data-nav
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Home</a
                >
                <a
                    href="/task"
                    data-nav
                    class="text-gray-700 hover:text-blue-600 transition-colors duration-200"
                    >Tasks</a
                >
                </div>
            </nav>
        `,
    })
}

export default Navbar