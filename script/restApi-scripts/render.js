import { initCloseBtn, initContentBox, initLayout } from "../fetch-scripts/initFunctions.js";
import { editBtn } from "./btns.js";
import { inputValidation } from "./utils.js";

export function initForm(title, body) {
    const form = document.createElement('form');
    form.setAttribute('action', '#');
    form.className = 'content-box-form';

    const textarea = document.createElement('textarea');
    const bodyTextarea = document.createElement('textarea');

    textarea.setAttribute('type', 'text');
    textarea.className = 'content-box-form__textarea content-box-form__textarea_title';
    textarea.setAttribute('placeholder', 'Set title');
    textarea.setAttribute('name', 'textareaTitle');
    if (title) {
        textarea.value = title;
    }

    bodyTextarea.setAttribute('type', 'text');
    bodyTextarea.className = 'content-box-form__textarea content-box-form__textarea_body';
    bodyTextarea.setAttribute('placeholder', 'Set content');
    bodyTextarea.setAttribute('name', 'textareaBody');
    if (body) {
        bodyTextarea.value = body;
    }

    form.append(textarea, bodyTextarea);

    return form;
}

export function renderEdit() {
    const editBtn = document.createElement('button');
    editBtn.className = 'post__edit-btn';
    editBtn.textContent = 'edit'

    return editBtn;
}

export function renderInput() {
    const parent = document.querySelector('.main-part');
    const selectAll = document.querySelector('.main-part__select-all');
    const label = document.createElement('label')
    label.className = 'label-edit'
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    input.className = 'label-edit__checkbox';

    label.append(input);
    label.onclick = function(e) {
        e.stopPropagation();
    }

    input.onchange = () => {
        inputValidation(input, parent, selectAll);
    }

    return label;
}

export function renderEditBox(json, id) {
    const { title, body } = json

    const contentBox = initContentBox(id);
    const layout = initLayout(contentBox);

    const form = initForm(title, body);

    const closeBtn = initCloseBtn(contentBox, layout)

    const editButton = editBtn(id, form);

    document.body.append(contentBox, layout);
    contentBox.append(form);
    form.append(closeBtn, editButton);
}