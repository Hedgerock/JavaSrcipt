import { Alert } from "./alertClass.js"
import { Prompt } from "./prompt.js"
import { Confirm } from "./сonfirm.js"
import { animation, changeIcon, initTheme } from "./functions.js"
import { initMenu } from "../menu.js"

const confirmBtn = document.querySelector('.container__select-btn_confirm')
const alertBtn = document.querySelector('.container__select-btn_alert')
const promptBtn = document.querySelector('.container__select-btn_prompt')

initMenu();

const preload = document.querySelector('.preload');
const container = document.querySelector('.container');
const header = document.querySelector('.header');

setTimeout (() => {
    container.removeAttribute('style');
    header.removeAttribute('style');
}, 1000);

setTimeout (() => {
    setTimeout (() => {
        preload.remove();
    }, 600)

    preload.style.opacity = 0;
}, 3000);

const w1 = new Confirm()
const w2 = new Alert()
const w3 = new Prompt()

confirmBtn.onclick = () => {
    w1.create();
    const parent = document.querySelector('.my-window_confirm')
    animation(parent);
}

alertBtn.onclick = () => {
    w2.create();
    const parent = document.querySelector('.my-window_alert')
    animation(parent);
}

promptBtn.onclick = () => {
    w3.create();
    const parent = document.querySelector('.my-window_prompt')
    animation(parent);
}

const changeModeBtn = document.querySelector('.btn-mode');

initTheme();

changeModeBtn.onclick = function() {
    const body = document.body;
    const mode = body.dataset
    mode.theme === 'light' ? mode.theme = 'dark' : mode.theme = 'light'

    changeIcon(mode.theme);

    localStorage.setItem('currentTheme', mode.theme);
}