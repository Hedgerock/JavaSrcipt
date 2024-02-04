import { contents, mainPart } from "../data.js";
import { updateBreadCrumbs } from "../functions/getFunctions.js";
import { createContainer } from "./profileFunctions/profileCreateFunctions.js";
import { renderContent } from "./profileFunctions/profileRenderFunctions.js";

export async function makeProfile(name, el, img, value) {
    window.scrollTo(0,0);

    mainPart.classList.add('main-part_content-profile');

    const { films, vehicles, starships, characters, people, pilots, residents, species, planets } = el
    const obj = setObj(films, vehicles, starships, characters, people, pilots, residents, species, planets);

    updateBreadCrumbs(name, img);

    await createContainer(name, el, img, value);

    renderContent(obj);
}

function setObj() {
    const args = [...arguments];
    const newObj = contents;

    newObj.forEach((item, index) => {
        item.array = args[index]
    })

    return newObj;
}