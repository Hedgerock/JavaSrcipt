import { initGetAjax } from "./mainFunc.js";

export async function initTodosStatus(urlFrom, urlTo, id, selector) {
    await $.ajax({ url: `${urlFrom}/${id}`, method: 'get', dataType: 'json',

        success: async function(result) {
            result.finished = !result.finished;
            initDelete(`${urlFrom}/${id}`);

            await $.ajax({ 
                url: urlTo, 
                method: 'post', 
                dataType: 'json', 
                contentType: 'application/json', 
                data: JSON.stringify(result)
            })

            await initGetAjax(`${urlTo}/${id}`, selector)

            $(`${selector} li:nth-child(1)`)
            .css({ opacity: 0,translate: '-100%' })
            .animate({ opacity: 1,translate: 0 }, 2000, () => { $(`${selector} li`).removeAttr('style') })
        }
    })
}


export function initDelete(thisUrl) {
    $.ajax({ url: thisUrl, method: 'delete' })
}

export async function initPostAjax(url, selector) {
    await $.ajax({ url: url, method: 'post', dataType: 'json', contentType: 'application/json',

        data: JSON.stringify({ "text": $('.add-todo-form__input').val(), "finished" : false}),
        success: async (response) => {
            await initGetAjax(`${url}/${response.id}`, selector);

            $('.todo-list_unfinished li:nth-child(1)')
            .css({ opacity: 0,translate: '-100%' })
            .animate({ opacity: 1,translate: 0 }, 2000)
        }
    })
}

export function totalExtermination(unfinishedUrl, finishedUrl) {
    $('.todo-item').each(async(index, item) => {
        const parent = item.closest('ul');
        const id = item.dataset.id;

        await $(parent).hasClass('todo-list_unfinished')
            ? initDelete(`${unfinishedUrl}/${id}`)
            : initDelete(`${finishedUrl}/${id}`)

        $(item).animate({ opacity: 0,translate: "-100%" }, 2000, () => { $(item).remove()} )
    })
}

export function animation(selector, opacityVal, translateVal, time, func) {
    if (!func) {
        func = '';
    }
    
    opacityVal === 0
        ? $(selector).animate({ opacity: opacityVal ,translate: translateVal }, time, func, function() { $(this).hide() })
        : $(selector).show().animate({ opacity: opacityVal ,translate: translateVal }, time, func);
}

export function css(selector, opacityVal, translateVal, display) {

    $(selector).css({ opacity: opacityVal,translate: translateVal, display: display })
}

export async function getStatus(url) {
    let status;
    
    await $.ajax({
        url: url, method: 'get', dataType: 'json',
        success: ((response) => {
            status = response.status

            status 
            ? $('.todo-filter-label__input').attr('checked', '')
            : $('.todo-filter-label__input').removeAttr('checked');
        })
    })

    return status;
}