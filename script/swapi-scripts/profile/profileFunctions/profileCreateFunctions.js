import { mainPart } from "../../data.js";
import { createImg } from "../../functions/createFunctions.js";
import { getCharacterList } from "./mainInfo.js";

export async function createContainer(name, el, img, newKey) {
    const container = document.createElement('div');
    container.className = 'profile-box';

    console.log(newKey);
    const list = await getCharacterList(el, name, newKey);

    const picture = createImg(name, 'profile-picture-box', 'profile-picture-box__img');
    const elImg = picture.querySelector('.profile-picture-box__img');
    elImg.src = img;

    mainPart.append(container);
    container.append(picture, list);

    return container;
}