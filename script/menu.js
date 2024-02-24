import { menuEl } from "./data.js";

export function initMenu() {
    const container = document.querySelector('.container_menu');
    const menu = createEl('ul', 'menu');

    const hash = getHash();

    menuEl.forEach(arg => {
        const { title, href, icon } = arg;

        const check = title.replace(/\s+/g, '').toLowerCase();
        const menuElementClassName = hash === check ? 'menu-element menu-element_active' : 'menu-element';

        const li = createEl('li', menuElementClassName);
        const a = createEl('a', 'menu-element__link');
        const i = createEl('i', icon);

        li.title = title;
        a.href = href;

        hash === check ? menu.prepend(li) : menu.append(li)
        li.append(a);
        a.append(i);
    })

    container.append(menu);
}


function createEl(tag, classNameVal, textContentVal) {
    const el = document.createElement(tag);
    el.className = classNameVal;

    if (textContentVal) {
        el.textContent = textContentVal;
    }

    return el;
}

function getHash() {
    let hash = window.location.href
    .match(/\/[\w\d\s-]+.html/, '')
    .join('')
    .replace(/[\/.]+html/gm, '')
    .slice(1)
    .toLowerCase();

    if (hash === 'index') {
        hash = 'mainpage'
    }

    return hash
}