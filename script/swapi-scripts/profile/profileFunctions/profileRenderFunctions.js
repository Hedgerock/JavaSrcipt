import { breadCrumbs, mainPart } from "../../data.js";
import { createImg } from "../../functions/createFunctions.js";
import { getEmpty } from "../../functions/getFunctions.js";
import { initBreadCrumbs } from "../../functions/initFunctions.js";
import { preload, preloadProcess } from "../../functions/preload.js";
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

export async function renderProfileContainer(arr, value, relatedResidents) {
    const container = document.createElement('div');
    container.className = 'profile-container';
    relatedResidents.append(container);
    const preloader = preload(container);

    for (let key of arr) {
        const info = await preloadProcess(key);
        const { title: contentName, url, name } = info;

        const profileBox = createImg(contentName ? contentName : name, 'profile-content-box', 'profile-content-box__img');

        const link = await makeSrc(profileBox, 'profile-content-box__img', url, value)

        profileBox.onclick = async function() {
            const newValue = value === 'characters' ? 'people' : value;
            getEmpty(breadCrumbs, mainPart);
            initBreadCrumbs(newValue, null, key)
            await makeProfile(contentName ? contentName : name, info, link, newValue);
        }

        container.append(profileBox);
    }
    preloader.remove();

    if (container.childNodes.length === 0) {
        const title = document.createElement('h2');
        title.className = 'profile-container__title';
        title.textContent = `No related ${value}`

        container.classList.add('profile-container_empty');
        container.append(title);
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