import { structure } from "../../data.js";
import { getList } from "./profileGetFunctions.js";

export function getCharacterList(el, name, newKey) {
    const args = structure[newKey].map(key => el[key]);

    const newObj = Object.entries(el)
    .filter(item => args.includes(item[1]))
    .sort((a,b) => args.indexOf(a[1]) - args.indexOf(b[1]));

    const list = getList(newObj, name)

    return list
}