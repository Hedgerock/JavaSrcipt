import { initCloseBtn, initContentBox, initImg, initLayout, initPhotoContent } from "../initFunctions.js";

const mainPart = document.querySelector('.main-part');

export function renderPhoto(urlImg, item) {
    mainPart.setAttribute('class', 'main-part main-part_pictures')

    const { url, id } = item;

    const block = document.createElement('div');
    block.setAttribute('data-id', id);
    
    const picture = initImg(url);

    block.className = 'picture-block';
    block.onclick = () => {
        initPhotoContent(urlImg, id, item);
    }

    mainPart.append(block);
    block.append(picture);
}

export function renderBigPicture(json) {
    const { url } = json[0]

    const box = initContentBox();
    const layout = initLayout(box);
    const closeBtn = initCloseBtn(box, layout);

    const picture = initImg(url)
    picture.classList.add('image-block_big')

    document.body.append(box, layout);
    box.append(picture, closeBtn);
}