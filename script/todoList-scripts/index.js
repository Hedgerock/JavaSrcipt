import { clockwork } from "../menu.js";
import { animation, css, getStatus, initPostAjax, totalExtermination } from "./functions.js";
import { initGetAjax } from "./mainFunc.js";

export const myUrl = 'http://localhost:3000';
export const unfinishedUrl = `${myUrl}/unfinishedTodos`
export const finishedUrl = `${myUrl}/finishedTodos`
export const checkedStatus = `${myUrl}/checkedOnly`

clockwork();

setInterval (() => {
    clockwork();
}, 1000)

const status = await getStatus(checkedStatus);

$(async function($) {
    await initGetAjax(unfinishedUrl, '.todo-list_unfinished');
    await initGetAjax(finishedUrl, '.todo-list_finished');

    $('.add-todo-form__input').on('input', () => {
        $('.add-todo-form__input').val().trim().length === 0
           ? $('.add-todo-form__button_submit').attr('disabled', '')
           : $('.add-todo-form__button_submit').removeAttr('disabled')
    })

    $('.add-todo-form').on('submit', async(e) => {
        e.preventDefault();
        await initPostAjax(unfinishedUrl, '.todo-list_unfinished')
        $('.add-todo-form__input').val('');
    })

    status
    ? css('.todo-list_finished', 1, '-105%', 'none')
    : css('.todo-list_finished', 1, '0', 'flex');

    $(document).on('change', '.todo-filter-label__input', async (e) => {
        const $this = e.target;

        await $.ajax({ 
            url: checkedStatus, 
            method: 'put', 
            data: JSON.stringify({ status: !status }),
            contentType: 'application/json',

            success: () => {
                $($this).is(':checked')
                    ? animation('.todo-list_finished', 0, '105%', 2000)
                    : animation('.todo-list_finished', 1, '0', 2000)
            }
        })
    })

    $('.add-todo-form__button_removeAll').click((e) => {
        e.preventDefault();
        totalExtermination(unfinishedUrl, finishedUrl)
    })
})