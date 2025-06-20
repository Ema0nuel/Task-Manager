import home from "./views/home";
import task from "./views/task";
import taskDetail from "./views/taskDetail";
import notfound from "./views/notfound";
import { setActiveNav } from "./util/active";

const routes = {
    home,
    task,
    taskDetail,
    notfound
};

export function parsePathToRoute(pathname) {
    // Remove leading slash and query/hash
    const cleanPath = pathname.replace(/^\/+/, "").split(/[?#]/)[0];
    const parts = cleanPath.split("/");

    if (cleanPath === "" || cleanPath === "home") return { page: "home" };
    // Task detail route: /taskDetail/:id
    if (parts[0] === "taskDetail" && parts[1]) {
        return { page: "taskDetail", args: [parts[1]] };
    }
    if (routes[cleanPath]) return { page: cleanPath };

    return { page: "notfound" };
}

//Get Routing Path
function getPathForRoute(page, ...args) {
    if (page === "home") return "/";
    if (page === "task") return "/task";
    if (page === "taskDetail" && args[0]) return `/taskDetail/${args}`;
    if (page === "notfound") return "/notfound";

    return "/";
}


export async function loadPage(page, ...args) {
    try {
        const render = routes[page];
        const newPath = getPathForRoute(page, ...args);
        if (window.location.pathname !== newPath) {
            window.history.pushState({ page, args }, "", newPath);
        }

        const { html, pageEvents } = await render(...args);
        window.app.innerHTML = html;
        setActiveNav(page)
        pageEvents?.();

    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("popstate", async (event) => {
    const { page, args } = event.state || parsePathToRoute(window.location.pathname);

    if (page && routes[page]) {
        await loadPage(page, ...(args || []));
    } else if (page !== null) {
        console.log("error finding page");
        loadPage("notfound")
    }
});

window.addEventListener("DOMContentLoaded", async () => {
    const { page, args } = parsePathToRoute(window.location.pathname);
    if (page && routes[page]) {
        await loadPage(page, ...(args || []));
    } else if (page !== null) {
        console.log("error finding page");
    }
})