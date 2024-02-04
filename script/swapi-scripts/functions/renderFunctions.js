import { breadCrumbs, mainPart, pagination, url } from '../data.js'
import { createButton } from './createFunctions.js';
import { initBreadCrumbs, initCurrentPage, initDom } from './initFunctions.js';
import { removeDisabled } from './otherFunctions.js';
import { preloadProcess } from './preload.js';

export async function renderMainPage() {
    const getTopics = await preloadProcess(url, mainPart);

    initDom(getTopics);
}

export async function renderArr(arr, key, obj, newUrl) {
    initBreadCrumbs(key, obj, newUrl);

    arr.forEach((page, index) => {
        const newPage = createButton('pagination__button', page);

        newPage.onclick = async function() {
            breadCrumbs.classList.add('bread-crumbs_inactive');

            await initCurrentPage(`${url}/${key}?page=${index + 1}`, key);
            removeDisabled();

            breadCrumbs.classList.remove('bread-crumbs_inactive');
            this.setAttribute('disabled', '');
        }
        pagination.append(newPage);
    })
}