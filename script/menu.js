import { menuEl, monthArr } from "./data.js";
import { createElem } from "./timeScripts/createFunc.js";

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


export function clockwork() {
    const timeBox = document.querySelector('.time');
    timeBox.innerHTML = '';

    const time = new Date();

    let day = time.getDate();
    let month = monthArr[time.getMonth()];
    let year = time.getFullYear();

    const { hours, minutes, seconds } = timeConvert(time);

    const el = createElem({ tag: 'span', className: 'time-span', textContent: `${hours}:${minutes}:${seconds}` })
    const elDate = createElem({ tag: 'span', className: 'date', textContent: `${day} ${month} ${year}` })

    timeBox.append(el, elDate);
}

export function timeConvert(time) {
    let hours = time.getHours().toString();
    let minutes = time.getMinutes().toString();
    let seconds = time.getSeconds().toString();

    hours.length === 1 ? hours = `0${hours}` : hours
    minutes.length === 1 ? minutes = `0${minutes}` : minutes
    seconds.length === 1 ? seconds = `0${seconds}` : seconds

    return { hours, minutes, seconds }
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