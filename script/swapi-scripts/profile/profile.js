import { contents, mainPart } from "../data.js";
import { updateBreadCrumbs } from "../functions/getFunctions.js";
import { createContainer } from "./profileFunctions/profileCreateFunctions.js";
import { initNewObj } from "./profileFunctions/profileInitFunctions.js";
import { renderContent } from "./profileFunctions/profileRenderFunctions.js";

export async function makeProfile(name, el, img) { 
    mainPart.classList.add('main-part_content-profile');

    updateBreadCrumbs(name, img);

    const newObj = initNewObj(el);

    createContainer(name, newObj, img);

    const { films, vehicles, starships, characters, people, pilots, residents } = el
    const obj = setObj(films, vehicles, starships, characters, people, pilots, residents);

    renderContent(obj);
}

function setObj() {
    const args = [...arguments];
    const newObj = contents;

    newObj.forEach((item, index) => {
        item.array = args[index]

        console.log(index, args[index]);
    })

    return newObj;
}