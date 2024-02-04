import { initDelete, initTodosStatus } from "./functions.js";
import { finishedUrl, unfinishedUrl } from "./index.js";

export async function initGetAjax(url, selector) {
    await $.ajax({ url: url, method: 'get', dataType: 'json',

        success: function(data) {
            if (!Array.isArray(data)) {
                data = [data];
            }

            data.forEach((todo, index) => {
                $(selector).prepend(`
                <li class="todo-item " data-id=${todo.id}>
                    <input type="checkbox" class="todo-item__completed mr-1" name="checkboxEl" ${todo.finished ? 'checked' : ''}>
                    <p class="todo-item__text mr-1">${todo.text}</p>
                    <button class="todo-item__delBtn">del</button>
                </li>
                `);
            })
        }
    })

    $('.todo-item__completed').off('change').on('change', async (e) => {
        const parent = $(e.target).parent();
        const id = parent.data('id');

        $(e.target).is(':checked')
            ? initTodosStatus(unfinishedUrl, finishedUrl, id, '.todo-list_finished', parent) 
            : initTodosStatus(finishedUrl, unfinishedUrl, id, '.todo-list_unfinished', parent)


        $(parent).animate({ opacity: 0.25, translate: "100%"}, 2000, 
        function() { 
            $(parent).remove() 
        });

    })

    $('.todo-item__delBtn').click(async (e) => {
        const parent = $(e.target).parent();
        const id = parent.data('id');
        const mainParent = parent.closest('ul');
        
        await $(mainParent).hasClass('todo-list_unfinished')
        ? initDelete(`${unfinishedUrl}/${id}`)
        : initDelete(`${finishedUrl}/${id}`)

        $(parent).animate({ opacity: 0,translate: "-100%" }, 2000, () => {
            $(parent).remove();
        })
    })
}