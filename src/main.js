import './style.css'
import './index.css'
import { loadPage, parsePathToRoute } from './routes.js'

const app = document.getElementById("app");
window.app = app

document.addEventListener("click", async (e) => {
    if (e.target.matches('[data-nav]')) {
        e.preventDefault();
        const path = e.target.getAttribute('href')
        const { page } = parsePathToRoute(path)
        await loadPage(page)
    }
})