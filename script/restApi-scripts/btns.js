import { fetchRequestFuncDel, fetchRequestFuncPatch, fetchRequestFuncPosts } from "./fetchRequestFunc.js";


export function createBtn(form) {
    const createBtn = initBtn('Create post', 'content-box-form__btn content-box-form__btn_create');

    createBtn.onclick = async (e) => {
        e.preventDefault();

        const titleValue = form.textareaTitle.value;
        const bodyValue = form.textareaBody.value

        if (titleValue.trim().length === 0 || bodyValue.trim().length === 0) {
            return;
        }

        fetchRequestFuncPosts(titleValue, bodyValue)

        location.reload();
    }

    return createBtn;
}

export function editBtn(id, form) {
    const editButton = initBtn('Edit post', 'content-box-form__btn content-box-form__btn_edit');

    editButton.onclick = function(e) {
        e.preventDefault();

        const titleValue = form.textareaTitle.value;
        const bodyValue = form.textareaBody.value

        if (titleValue.trim().length === 0 ) {
            return;
        }

        fetchRequestFuncPatch(id, titleValue, bodyValue)


        location.reload();
    }

    return editButton;
}

export function delBtn() {
    const deleteButton = initBtn('Delete selected', 'content-box-form__btn content-box-form__btn_delete');

    deleteButton.onclick = function() {
        const inputs = document.querySelectorAll('.label-edit__checkbox');

        inputs.forEach(item =>{
            const id = item.closest('.post').dataset.id;

            if (item.checked) {
                fetchRequestFuncDel(id, 'DELETE')
            }
        })
    }

    return deleteButton;
}

export function initBtn(content, title) {
    const btn = document.createElement('button');
    btn.textContent = content
    btn.className = title

    return btn
}