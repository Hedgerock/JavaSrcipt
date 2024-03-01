import { films } from "../data.js";
import { makeValueAlter } from "../makeAndInitFunc.js";

export function renderPosts() {
    const ul = renderEachComp(films, 'films', 'element');

    return ul
}

export function renderEachComp(arr, className, elClass) {
    if (arr.length === 0) {
        return ''
    }

    const ul = makeValueAlter(arr, className, elClass);

    return ul;
}