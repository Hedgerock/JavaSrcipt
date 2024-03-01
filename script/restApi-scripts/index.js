import url from "./url.js";
import { fetchFunction } from "../fetch-scripts/fetchAndButtons.js";
import { renderDom, renderElements, renderPostTitles } from "../fetch-scripts/render/renderPosts.js";
import { createPost } from "./functions.js";
import { initEditOption, removeEditBtn } from "./renderUtils.js";
import { checkPostsStatus } from "./utils.js";
import { clockwork, initMenu } from "../menu.js";

const newElBtn = document.querySelector('.fetch-buttons__current-btn_newEl');
const checkbox = document.querySelector('.checkbox-edit');

clockwork();

setInterval (() => {
    clockwork();
}, 1000)

fetchFunction(url, renderElements, renderDom, renderPostTitles);

checkbox.onchange = () => {
    const posts = document.querySelectorAll('.post');

    checkbox.checked ? initEditOption(posts) : removeEditBtn()

    checkPostsStatus(checkbox, posts);
}

newElBtn.onclick = () => {
    createPost();
}