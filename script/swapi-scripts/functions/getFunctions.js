import { contentInOnePage, mainPart } from "../data.js";
import { makeProfile } from "../profile/profile.js";
import { makeSrc } from "../profile/profileFunctions/profileMakeFunctions.js";
import { createImg, createLink } from "./createFunctions.js";
import { initArr } from "./initFunctions.js";
import { renderArr } from "./renderFunctions.js";


export async function getCount(obj, key, newUrl) {
    const currentUrl = obj ? obj[key] : newUrl;

    const info = await fetch(currentUrl);
    const totalPages = await info.json();

    const { count } = totalPages;

    const result = Math.ceil(count / contentInOnePage);

    const arrayPages = initArr(result);

    renderArr(arrayPages, key, obj, newUrl);
}

export async function getLinks(key, arr) {
    for (let el of arr) {
        if (key === 'people') {
            key = 'characters'
        }

        let { name } = el;

        const { url } = el;

        if (key === 'films') {
            const { title } = el;
            name = title;
        }

        const pictureBox = createImg(name, 'picture-box', 'picture-box__img');

        const link = await makeSrc(pictureBox, 'picture-box__img', url, key);

        pictureBox.onclick = function() {
            const pagination = document.querySelector('.pagination');
            getEmpty(pagination, mainPart);
            makeProfile(name, el, link);
            console.log(`${name}\n${el}\n${link}`)
        }

        mainPart.append(pictureBox);
    }
}

export function getEmpty() {
    const args = [...arguments];

    args.forEach(el => el.innerHTML = '');
}

export function updateBreadCrumbs(name) {
    const breadCrumbs = document.querySelector('.bread-crumbs');
    const crumbs = createLink(name === 'characters' ? 'people' : name , '#');
    breadCrumbs.append(crumbs)
}