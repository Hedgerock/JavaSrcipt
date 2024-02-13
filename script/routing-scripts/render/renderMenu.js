import routes from "../data.js";
import { createEl } from "../utils.js";

export function renderMenu() {
    const header = document.querySelector('.header');

    const menu = renderMenuEl();

    header.append(menu);
}

export function renderMenuEl() {
    const menu = createEl('header-menu', 'ul');

    routes.forEach(el => {
        const title = el.path[0];

        if (title === '**' || title === null) {
            return;
        }

        const elLink = el.path[1];

        const element = createEl('header-menu-el', 'li');
        const link = createEl('header-menu-el__link', 'a', title);
        link.href = `#${elLink}`

        menu.append(element);
        element.append(link);
    })

    return menu
}