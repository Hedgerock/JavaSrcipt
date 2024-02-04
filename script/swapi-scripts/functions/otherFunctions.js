import { pagination } from "../data.js";
import { getEmpty } from "./getFunctions.js";
import { initContentList } from "./initFunctions.js";
import { renderMainPage } from "./renderFunctions.js";

export function backHomePage(mainPart, parentEl, home) {
    const child = home.querySelector('a');
    child.onclick = function() {
        mainPart.classList.remove('main-part_content-profile');
        const pagination = document.querySelector('.pagination');
        getEmpty(mainPart, parentEl, pagination);
        renderMainPage();
    }
}

export function backToList(mainPart, parentEl, el, key, obj, newUrl) {
    const child = el.querySelector('a');
    child.onclick = async function() {
        mainPart.classList.remove('main-part_content-profile');
        getEmpty(mainPart, parentEl);
        await parentEl.classList.add('bread-crumbs_inactive');
        initContentList(obj, key, newUrl);
    }
}

export function removeDisabled() {
    const btns = pagination.querySelectorAll('.pagination__button');
    btns.forEach(btn => {
        btn.removeAttribute('disabled');
    })
}

export function setDisabled() {
    const btns = pagination.querySelectorAll('.pagination__button');
    btns.forEach(btn => {
        btn.setAttribute('disabled', '');
    })
}

export function updateNewUrl(url, key) {
    const newUrl = url.split(key);
    return newUrl[0] + key
}

export function titleOrName(key, title, name) {
    return key === 'films' ? title : name
}