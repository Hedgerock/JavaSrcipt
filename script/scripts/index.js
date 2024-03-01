import { animation, changeIcon, initTheme } from "./functions.js";
import { clockwork } from "../menu.js";
import { AlertClass } from "./alertClass.js";
import { ConfirmClass } from "./confirm.js";
import { PromptClass } from "./prompt.js";

const confirmBtn = document.querySelector('.container__select-btn_confirm')
const alertBtn = document.querySelector('.container__select-btn_alert')
const promptBtn = document.querySelector('.container__select-btn_prompt')

clockwork();

setInterval (() => {
    clockwork();
}, 1000)

const preload = document.querySelector('.preload');
const container = document.querySelector('.container');

setTimeout (() => {
    container.removeAttribute('style');
}, 1000);

setTimeout (() => {
    setTimeout (() => {
        preload.remove();
    }, 600)

    preload.style.opacity = 0;
}, 3000);

const w1 = new ConfirmClass()
const w2 = new AlertClass();
const w3 = new PromptClass()

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