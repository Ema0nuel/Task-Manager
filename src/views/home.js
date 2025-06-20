import { resetPage } from "../util/reset"
import Navbar  from "../components/Navbar"

const home = () => {
    resetPage("Home");

    const { html: NavMenu } = Navbar()
    function pageEvents() {

    }
    return ({
        html: `
        <div class="min-h-screen">
            ${NavMenu}
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in">
                <section class="text-center fade-in">
                    <h1 class="text-3xl font-bold mb-4 text-blue-700">
                        Welcome to TaskManager
                    </h1>
                    <p class="text-gray-600 text-lg">Your sleek productivity companion.</p>
                    <i
                        class="fas fa-check-circle text-green-500 text-5xl mt-4 animate-bounce"
                    ></i>
                </section>
            </div>
        </div>
    `,
        pageEvents,
    })
}

export default home