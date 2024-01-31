import { url } from '../data.js'
import { initBreadCrumbs, initCurrentPage, initDom } from './initFunctions.js';
import { removeDisabled } from './otherFunctions.js';

export async function renderMainPage() {
    const topics = await fetch(url);
    const getTopics = await topics.json();

    initDom(getTopics);
}

export function renderArr(arr, key, obj, newUrl) {
    const parentEl = document.querySelector('.pagination');

    initBreadCrumbs(key, obj, newUrl);

    arr.forEach((page, index) => {
        const newPage = document.createElement('button');
        newPage.className = 'pagination__button';
        newPage.textContent = page;

        newPage.onclick = async function() {
            await initCurrentPage(`${url}/${key}?page=${index + 1}`, key);
            removeDisabled();

            this.setAttribute('disabled', '');
        }
        parentEl.append(newPage);

        const firstChild = document.querySelector('.pagination__button:first-child');
        firstChild.setAttribute('disabled', '');
    })
}