import { mainPart } from "../../data.js";
import { createImg } from "../../functions/createFunctions.js";
import { getList } from "./profileGetFunctions.js";

export function createContainer(name, newObj, img) {
    const container = document.createElement('div');
    container.className = 'profile-box';

    const list = getList(newObj)

    const picture = createImg(name, 'profile-picture-box', 'profile-picture-box__img');
    const elImg = picture.querySelector('.profile-picture-box__img');
    elImg.src = img;

    mainPart.append(container);
    container.append(picture, list);

    return container;
}