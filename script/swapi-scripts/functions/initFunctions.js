import { toCapitalize } from "../../fetch-scripts/utils.js";
import { imgFormat, mainPart } from "../data.js";
import { createImg, createLink, createTopic } from "./createFunctions.js";
import { getCount, getLinks } from "./getFunctions.js";
import { backHomePage, backToList, setDisabled } from "./otherFunctions.js";

export function initDom(obj) {
    const arr = Object.keys(obj).sort((a,b) => a.localeCompare(b));

    for (const key of arr) {
        const topicsBox = createTopic(key);

        const imgBox = createImg(key, 'topic-picture-box', 'topic-picture-box__img');
        const picture = imgBox.querySelector('.topic-picture-box__img');

        imgBox.removeAttribute('data-title');

        topicsBox.onclick = () => {
            mainPart.innerHTML = ''

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

    console.log(url, key)

    setDisabled();
    const test = await fetch(url);
    const testInfo = await test.json();

    const results = testInfo.results

    getLinks(key, results);
}

export function initArr(result) {
    const arrayPages = [];

    for(let i = 1; i <= result; i++) {
        arrayPages.push(i);
    }

    return arrayPages;
}

export function initBreadCrumbs(key, obj, newUrl) {
    const parentEl = document.querySelector('.bread-crumbs');

    const home = createLink('Home', '#');
    const el = createLink(toCapitalize(key), '#');

    backToList(mainPart, parentEl, el, key, obj, newUrl);
    console.log(newUrl);
    backHomePage(mainPart, parentEl, home);

    parentEl.append(home, el);
}

export function initContentList(obj, key, newUrl) {
    if (key === 'characters') {
        key = 'people';
    }

    if (newUrl) {
        newUrl = newUrl.split(key);
        newUrl = newUrl[0] + key;
    }

    const link = obj ? obj[key] : newUrl;
    const url = link + '/?page=1'
    console.log(`NewUrl:${newUrl}\nObj:${obj}\nKey:${key}\nUrl:${url}`);

    getCount(obj, key, url);
    initCurrentPage(url, key)
}