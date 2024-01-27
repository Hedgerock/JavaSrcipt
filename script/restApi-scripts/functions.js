import { initCloseBtn, initContentBox, initLayout } from "../fetch-scripts/initFunctions.js";
import { createBtn } from "./btns.js";
import { fetchRequestFuncGet } from "./fetchRequestFunc.js";
import { initForm } from "./render.js";

export function createPost() {
    const contentBox = initContentBox();
    const layout = initLayout(contentBox);

    const form = initForm();

    const closeBtn = initCloseBtn(contentBox, layout)
    const createButton = createBtn(form);

    document.body.append(contentBox, layout);
    contentBox.append(form);
    form.append(closeBtn, createButton);
}

export function editPost(id) {
    fetchRequestFuncGet(id)
}