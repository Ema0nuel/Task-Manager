export function resetPage(page) {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth", });
    document.title = `${page}`
}