import { resetPage } from "../util/reset"

const notfound = () => {
    resetPage("PAGE NOT FOUND");

    
    return ({
        html: `
            <div class="max-w-4xl mx-auto mt-6 px-4 fade-in min-h-screen">
                <section class="text-center">
                    <h1 class="text-3xl font-bold text-red-600 mb-2">404</h1>
                    <p class="text-gray-600 text-lg">Page not found</p>
                    <a href="/" data-nav class="text-blue-600 hover:underline">Return home</a>
                </section>
            </div>
        `
    })
}


export default notfound