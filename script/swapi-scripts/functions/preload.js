import { createImg } from "./createFunctions.js";

export async function preloadProcess(url, parent) {
    if(url.length === 0) {
        return;
    }

    if (Array.isArray(url)) {
        url = url[0];
    }

    const preloader = preload(parent);
    const request = await tryCatch(url, parent);

    if (parent) {
        preloader.remove();
    }
    const result = await request.json();

    return result
}


export function preload(parent) {
    if (!parent) {
        return;
    }
    const preloaderBox = document.createElement('div');
    preloaderBox.className = 'loading-box';
    const preloader = createImg('', 'loading', 'loading__img');
    const picture = preloader.querySelector('.loading__img');
    picture.src = '../../images/preloading.gif';

    parent.append(preloaderBox);
    preloaderBox.append(preloader);

    return preloaderBox;
}


async function tryCatch(url, parent) {
    let request;
    try {
        request = await fetch(url);
    } catch (error) {
        console.error('something went wrong with fetch:', error);
        initError(parent);
    }

    return request;
}

function initError(parent) {
    const box = createImg('', 'error', 'error__img');
    const img = box.querySelector('.error__img');
    img.src = '../../images/err404.png'

    parent.classList.add('error-box');

    parent.append(box);
}