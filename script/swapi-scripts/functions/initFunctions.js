import { toCapitalize } from "../../fetch-scripts/utils.js";
import { breadCrumbs, imgFormat, mainPart } from "../data.js";
import { createImg, createLink, createTopic } from "./createFunctions.js";
import { getCount, getLinks } from "./getFunctions.js";
import { backHomePage, backToList, removeDisabled, setDisabled, updateNewUrl } from "./otherFunctions.js";
import { preloadProcess } from "./preload.js";

export function initDom(obj) {
    const arr = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    for (const key of arr) {
        const topicsBox = createTopic(key);

        const imgBox = createImg(key, 'topic-picture-box', 'topic-picture-box__img');
        const picture = imgBox.querySelector('.topic-picture-box__img');

        imgBox.removeAttribute('data-title');

        topicsBox.onclick = () => {
            mainPart.innerHTML = ''

            breadCrumbs.classList.add('bread-crumbs_inactive')
            initContentList(obj, key);
        }

        const imgWebp = `${key}${imgFormat.webp}`

        picture.src = `./images/${imgWebp}`;

        mainPart.append(topicsBox);
        topicsBox.append(imgBox);
    }
}

export async function initCurrentPage(url, key) {
    mainPart.innerHTML = '';

    setDisabled();

    const info = await preloadProcess(url, mainPart)

    breadCrumbs.classList.remove('bread-crumbs_inactive');
    const results = info.results

    getLinks(key, results);

    removeDisabled();

    const firstChild = document.querySelector('.pagination__button:first-child');
    firstChild.setAttribute('disabled', '');
}

export function initArr(result) {
    const arrayPages = [];

    for(let i = 1; i <= result; i++) {
        arrayPages.push(i);
    }

    return arrayPages;
}

export function initBreadCrumbs(key, obj, newUrl) {
    const home = createLink('Home', '#');
    const el = createLink(toCapitalize(key), '#');

    backToList(mainPart, breadCrumbs, el, key, obj, newUrl);
    backHomePage(mainPart, breadCrumbs, home);

    breadCrumbs.append(home, el);
}

export async function initContentList(obj, key, newUrl) {
    if (key === 'characters') {
        key = 'people';
    }

    if (newUrl) {
        newUrl = updateNewUrl(newUrl, key);
    }

    const link = obj ? obj[key] : newUrl;
    const url = link + '/?page=1'

    await getCount(obj, key, url);
    initCurrentPage(url, key)
}