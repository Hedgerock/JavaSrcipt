import { fetchFunction } from "../fetch-scripts/fetchAndButtons.js";
import { renderDom, renderElements } from "../fetch-scripts/render/renderPosts.js";
import { initMenu } from "../menu.js";
import { inputValidation, specificBreed } from "./functions.js";
import { renderDogs, renderSelect } from "./render.js";

const picturesBtn = document.querySelector('.fetch-buttons__current-btn_pictures');
const mainPart = document.querySelector('.main-part');
const input = document.querySelector('.fetch-label__input');
const checkbox = document.querySelector('.breed-selection__checkbox');

initMenu();

fetchFunction('https://dog.ceo/api/breeds/list/all', renderElements, renderDom, renderSelect)

picturesBtn.onclick = () => {
    const select = document.querySelector('.options-select')
    mainPart.innerHTML = '';
    const total = input.value.length === 0 || input.value <= 0 ? 1 : input.value;
    let url = `https://dog.ceo/api/breeds/image/random/${total}`

    if (!select.className.includes('options-select_invisible')) {
        url = specificBreed(select, total);
    }

    fetchFunction(url, renderElements, renderDom, renderDogs);
    input.value = '';
}

input.oninput = inputValidation

checkbox.onchange = () => {
    const select = document.querySelector('.options-select')

    checkbox.checked 
    ? select.classList.remove('options-select_invisible')
    : select.classList.add('options-select_invisible')
}


