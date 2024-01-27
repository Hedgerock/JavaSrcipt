export function initAllChecked(parent, select) {
    const allCheckbox = Array.from(parent.querySelectorAll('.label-edit__checkbox'));

    changeClassName(select, allCheckbox)

    allCheckbox.forEach(item => {
        item.onchange = function() {
            inputValidation(item, parent, select);
        }
    })
}

export function changeClassName(select, arr) {
    select.checked
    ?   arr.forEach(checkbox => {
        const parent = checkbox.closest('.post')
        parent.classList.add('post_checked')
        checkbox.checked = true
    })

    :   arr.forEach(checkbox => {
        const parent = checkbox.closest('.post')
        parent.classList.remove('post_checked')
        checkbox.checked = false
    })
}

export function inputValidation(input, parent, select) {
    const allCheckbox = Array.from(parent.querySelectorAll('.label-edit__checkbox'));
    
    const label = input.parentElement;
    const parentEl = label.parentElement;
    input.checked ? parentEl.classList.add('post_checked') : parentEl.classList.remove('post_checked')

    if (!select) {
        return
    }

    if (allCheckbox.every(el => !el.checked)) {
        select.checked = false
    }

    if (allCheckbox.every(el => el.checked)) {
        select.checked = true
    }
}

export function checkPostsStatus(checkbox, posts) {
    if (!checkbox.checked) {
        posts.forEach(post => {
            post.classList.remove('post_checked');
        })
    }
}