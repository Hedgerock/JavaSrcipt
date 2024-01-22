import { initImg } from "../fetch-scripts/initFunctions.js";
import { toCapitalize } from "../fetch-scripts/utils.js";
import { initBigDog } from "./functions.js";

const mainPart = document.querySelector('.main-part');

export function renderDogs (item) {
    mainPart.setAttribute('class', 'main-part main-part_pictures')

    const { message } = item;

    message.forEach((el, index) => {renderSingleDog(el, index)})
}

export function renderSingleDog(el, index) {
    const block = document.createElement('div');

    const id = index + 1;
    block.dataset.id = id;
    
    const picture = initImg(el);

    block.className = 'picture-block';
    block.onclick = () => {
        const img = block.querySelector('.image-block__img');
        initBigDog(img.src);
    }

    mainPart.append(block);
    block.append(picture);
}

export function renderSelect(item) {
    const parent = document.querySelector('.options');
    const select = document.createElement('select');
    select.className = 'options-select options-select_invisible'
    const breeds = item.message;

    for (let breed in breeds) {
        if (breeds[breed].length > 0) {
            breeds[breed].forEach(subBreed => {createOption(select, breed, subBreed)});
            continue;
        }

        createOption(select, breed)
    }

    parent.append(select);
}


export function createOption(select, breed, subBreed) {
    const option = document.createElement('option');
    subBreed
    ? option.textContent = `${toCapitalize(subBreed)} ${toCapitalize(breed)}`
    : option.textContent = toCapitalize(breed)

    subBreed
    ? option.setAttribute('value', `${breed}-${subBreed}`)
    : option.setAttribute('value', breed);
    
    select.append(option);
}