import { initCloseBtn, initContentBox, initLayout, initPostContent } from "../initFunctions.js";
import { toCapitalize } from "../utils.js";

const mainPart = document.querySelector('.main-part');


export function renderElements(json, func, elFunc, url) {
    if (mainPart.hasChildNodes()) {
        return
    }
    func(json, elFunc, url);
}

export function renderDom(json, func, url) {
    mainPart.removeAttribute('class');
    Array.isArray(json)
    ? json.forEach((item, index) => {func(url, item, index)})
    : [json].forEach((item, index) => {func(url, item, index)})
}

export function renderContent(json) {
    const { body, title, id } = json
    const htmlBody = document.body;
    
    const contentBox = initContentBox(id);
    const layout = initLayout(contentBox);
    const closeBtn = initCloseBtn(contentBox, layout)

    const contentTitle = document.createElement('h3');
    const contentBody = document.createElement('p');

    contentTitle.className = 'content-box__title';
    contentTitle.textContent = title;
    contentBody.className = 'content-box__body';
    contentBody.innerHTML = body;

    htmlBody.append(layout, contentBox);
    contentBox.append(contentTitle, contentBody, closeBtn);

    return layout;
}

export function renderPostTitles(url, item, index) {
    mainPart.setAttribute('class', 'main-part main-part_posts')

    const { id, title } = item
    const el = document.createElement('div');
    const elNumber = document.createElement('span');
    const elTitle = document.createElement('h3');
    
    el.className = 'post';
    el.setAttribute('data-id', id);
    el.setAttribute('title', title)

    el.onclick = () => {
        initPostContent(url, id, item)
    }

    elNumber.className = 'post__number'
    elNumber.textContent = index + 1;

    elTitle.className = 'post__title';
    elTitle.textContent = toCapitalize(title);

    el.append(elNumber, elTitle);
    mainPart.append(el);
}