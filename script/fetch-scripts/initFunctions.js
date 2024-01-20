import { fetchFunction } from "./fetchAndButtons.js";
import { renderBigPicture } from "./render/renderPhoto.js";
import { renderContent, renderElements } from "./render/renderPosts.js";
import { removeElements } from "./utils.js";

export function initPostContent(id) {
    fetchFunction(`https://jsonplaceholder.typicode.com/posts/${id}`, renderContent, renderElements);
}

export function initPhotoContent(id) {
    fetchFunction(`https://jsonplaceholder.typicode.com/albums/1/photos/?id=${id}`, renderBigPicture, renderElements);
}

export function initContentBox() {
    const contentBox = document.createElement('div');
    contentBox.className = 'content-box';

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

export function initImg(url) {
    const picture = document.createElement('div');
    const img = document.createElement('img');
    picture.className = 'image-block';
    img.className = 'image-block__img';
    img.src = url

    picture.append(img);

    return picture
}