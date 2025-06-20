import { parsePathToRoute } from '../routes';
export function setActiveNav(page) {
    document.querySelectorAll('[data-nav]').forEach(link => {
        const path = link.getAttribute('href');
        const { page: linkPage } = parsePathToRoute(path);
        if (linkPage === page) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}