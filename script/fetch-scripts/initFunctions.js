import { fetchFunction } from "./fetchAndButtons.js";
import { renderBigPicture } from "./render/renderPhoto.js";
import { renderContent, renderElements } from "./render/renderPosts.js";
import { removeElements } from "./utils.js";

export function initPostContent(url, id) {
    fetchFunction(`${url}/${id}`, renderContent, renderElements);
}

export function initPhotoContent(url, id) {
    fetchFunction(`${url}/?id=${id}`, renderBigPicture, renderElements);
}

export function initContentBox(id) {
    const contentBox = document.createElement('div');
    contentBox.className = 'content-box';
    contentBox.dataset.id = id;

    if (!id) {
        contentBox.removeAttribute('data-id');
    }
    return contentBox;
}

export function initLayout(el) {
    const layout = document.createElement('div');

    layout.className = 'layout';
    layout.onclick = () => {
        removeElements(layout, el)
    }

    return layout;
}

export function initCloseBtn(el, layout) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'content-box__close-btn';
    closeBtn.textContent = 'close';
    el.append(closeBtn);


    closeBtn.onclick = () => {
        removeElements(el, layout);
    }

    return closeBtn;
}

export function initImg(urlImg) {
    const picture = document.createElement('div');
    const img = document.createElement('img');
    picture.className = 'image-block';
    img.className = 'image-block__img';
    img.src = urlImg

    picture.append(img);

    return picture
}