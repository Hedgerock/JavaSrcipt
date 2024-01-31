import { mainPart } from "../data.js";
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

    child.onclick = function() {
        mainPart.classList.remove('main-part_content-profile');
        getEmpty(mainPart, parentEl)
        initContentList(obj, key, newUrl);
    }
}

export function removeDisabled() {
    const btns = document.querySelectorAll('.pagination__button');
    btns.forEach(btn => {
        btn.removeAttribute('disabled');
    })
}

export function setDisabled() {
    const btns = document.querySelectorAll('.pagination__button');
    btns.forEach(btn => {
        btn.setAttribute('disabled', '');
    })
}