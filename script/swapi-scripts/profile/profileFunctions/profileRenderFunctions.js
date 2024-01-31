import { mainPart } from "../../data.js";
import { createImg } from "../../functions/createFunctions.js";
import { getEmpty } from "../../functions/getFunctions.js";
import { initBreadCrumbs } from "../../functions/initFunctions.js";
import { makeProfile } from "../profile.js";
import { initCurrentContent } from "./profileInitFunctions.js";
import { makeSrc } from "./profileMakeFunctions.js";

export function renderProfileInfo(value) {
    const box = document.createElement('div');
    box.className = 'related-content';
    const title = document.createElement('h3');
    title.className = 'related-content__title';
    title.textContent = value;
    box.append(title);

    box.onwheel = function(e) {
        if (e.deltaY !== 0) {
            e.preventDefault();
            box.scrollLeft += e.deltaY;
        }
    }
    

    return box;
}

export async function renderProfileContainer(arr, value) {
    const container = document.createElement('div');
    container.className = 'profile-container';

    for (let key of arr) {
        const request = await fetch(key);
        const info = await request.json();

        const { title: contentName, url, name } = info;

        const profileBox = createImg(contentName ? contentName : name, 'profile-content-box', 'profile-content-box__img');

        const link = await makeSrc(profileBox, 'profile-content-box__img', url, value)

        profileBox.onclick = function() {
            const newValue = value === 'characters' ? 'people' : value;
            const breadCrumbs = document.querySelector('.bread-crumbs');
            getEmpty(breadCrumbs, mainPart);
            initBreadCrumbs(newValue, null, key)
            makeProfile(contentName ? contentName : name, info, link);
        }

        container.append(profileBox);
    }

    return container;
}

export async function renderContent(arr) {
    for (let content of arr) {
        if (content.array) {
            await initCurrentContent(content.array, content.key, content.title);
        }
    }
}