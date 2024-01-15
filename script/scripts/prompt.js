import { ModalWindow } from "./modalWindow.js";

export class Prompt extends ModalWindow {
    create() {
        const myWindow = super.create();

        myWindow.classList.add(`${myWindow.className}_prompt`)

        const label = document.createElement('label');
        label.className = 'label';
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('name', 'enterInput');
        const btns = document.createElement('div');
        const confirmBtn = document.createElement('button');
        const declineBtn = document.createElement('button');

        btns.className = 'buttons';

        const title = super.initTitle();
        const layout = document.querySelector('.layout')

        confirmBtn.textContent = 'confirm';
        confirmBtn.onclick = () => {
            const value = this.inputValidation(input, label);
            if (!value) {
                return;
            }
            super.initCloseBtn(myWindow, layout, document.body)
            title.innerHTML = value;
            super.returnPrevTimeOut();
        }

        declineBtn.textContent = 'decline';
        declineBtn.onclick = () => {
            super.initCloseBtn(myWindow, layout, document.body)
            title.innerHTML = 'process has been declined :('
            super.returnPrevTimeOut();
        }

        label.append(input);
        myWindow.append(label, btns);
        btns.append(confirmBtn, declineBtn);
    }

    inputValidation(input, label) {
        const checker = input.value.trim()

        if (checker) {
            return checker
        }

        label.dataset.error = `can't be empty`;
        label.classList.add('label_error');

        setTimeout (() => {
            label.classList.remove('label_error');
            label.removeAttribute('data-error');
        }, 2000)
    }
}