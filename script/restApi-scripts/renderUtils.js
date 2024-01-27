import { delBtn, initBtn } from "./btns.js";
import { editPost } from "./functions.js";
import { renderInput } from "./render.js";
import { initAllChecked } from "./utils.js";

export function initEditOption(posts) {
    selectAllFunc();

    posts.forEach(post => {
        const editBtn = initBtn('edit', 'post__edit-btn');
        editBtn.setAttribute('title', 'edit');
        editBtn.innerHTML = '<i class="fa-solid fa-wrench"></i>'
        const input = renderInput();

        editBtn.onclick = function(e) {
            e.stopPropagation();
            const id = this.parentElement.dataset.id;
            editPost(id);
        }

        post.append(editBtn, input);
    })
}

function selectAllFunc() {
    const parent = document.querySelector('.main-part');

    const selectAll = document.createElement('input');
    selectAll.setAttribute('type', 'checkbox');
    const label = document.createElement('label');
    label.className = 'label-box';
    label.textContent = 'Select all posts:'
    label.append(selectAll);
    selectAll.className = 'main-part__select-all'

    const deleteButton = delBtn();

    if (parent) {
        parent.append(label, deleteButton);
    }


    selectAll.onchange = () => {
        initAllChecked(parent, selectAll)
    }
}

export function removeEditBtn() {
    const editBtn = document.querySelectorAll('.post__edit-btn');
    const selectAll = document.querySelector('.label-box');
    const deleteBtn = document.querySelector('.content-box-form__btn_delete')
    editBtn.forEach(btn => {
        const input = btn.parentElement.querySelector('.label-edit')
        input.remove();
        btn.remove();
    })

    if (selectAll) {
        selectAll.remove();
    }

    if (deleteBtn) {
        deleteBtn.remove();
    }
}