import routes from "../data.js";

export function renderMenu() {
    const header = document.querySelector('.header');

    const menu = renderMenuEl();

    header.append(menu);
}

export function renderMenuEl() {
    const menu = document.createElement('ul');
    menu.className = 'header-menu';

    routes.forEach(el => {
        const title = el.path[0];

        if (title === '**') {
            return;
        }

        const elLink = el.path[1];

        const element = document.createElement('li');

        const link = document.createElement('a');
        link.href = `#${elLink}`
        link.textContent = title;

        menu.append(element);
        element.append(link);
    })

    return menu
}