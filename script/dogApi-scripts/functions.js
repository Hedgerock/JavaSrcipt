import { initCloseBtn, initContentBox, initImg, initLayout } from "../fetch-scripts/initFunctions.js";

const text = document.querySelector('.fetch-label__question');
const input = document.querySelector('.fetch-label__input');

export function inputValidation() {
    const label = document.querySelector('.fetch-label');
    const value = input.value;

    if (value >= 51) {
        label.classList.add('fetch-label_warning')
        text.innerHTML = `To many dogs try 50 or less`
        text.style.color = 'orangered'
        input.value = 50

        setTimeout(() => {
            label.classList.remove('fetch-label_warning')
            text.innerHTML = `How many dogs do you want ?)`;
            text.removeAttribute('style');
        }, 3000)
    }
}
export function specificBreed(select, total) {
    let url = '';
    const value = select.value.split('-').map(item => item.toLowerCase());
    value.length > 1 
    ? url = `https://dog.ceo/api/breed/${value[0]}/${value[1]}/images/random/${total}`
    : url = `https://dog.ceo/api/breed/${value[0]}/images/random/${total}`

    return url
}

export function initBigDog(url) {

    const box = initContentBox();
    const layout = initLayout(box);
    const closeBtn = initCloseBtn(box, layout);

    const picture = initImg(url)
    picture.classList.add('image-block_big')

    document.body.append(box, layout);
    box.append(picture, closeBtn);
}