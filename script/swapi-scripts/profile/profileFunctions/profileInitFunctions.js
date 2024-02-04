import { mainPart } from "../../data.js";
import { renderProfileContainer, renderProfileInfo } from "./profileRenderFunctions.js";

export function initNewObj(el) {
    return Object.entries(el).filter(([key, value]) => !Array.isArray(value) && !String(value).includes('https'))
}

export async function initCurrentContent(arr, value, title) {
    const relatedResidents = renderProfileInfo(title);
    renderProfileContainer(arr, value, relatedResidents);
    mainPart.append(relatedResidents);
}