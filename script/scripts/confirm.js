import { ModalWindow } from "./modalWindow.js";

export class ConfirmClass extends ModalWindow {
    create() {
        const myWindow = super.create();

        myWindow.classList.add(`${myWindow.className}_confirm`);

        const confirmTitle = document.createElement('h3');
        confirmTitle.className = 'window__confirm-title'
        confirmTitle.textContent = 'Do you want to confirm this thing';
        const btns = document.createElement('div');
        const confirmBtn = document.createElement('button');
        const declineBtn = document.createElement('button');

        btns.className = 'buttons';

        const title = super.initTitle();
        const layout = document.querySelector('.layout')

        confirmBtn.textContent = 'confirm';
        confirmBtn.onclick = () => {
            super.initCloseBtn(myWindow, layout, document.body)
            title.innerHTML = 'process has been confirmed :)'
            super.returnPrevTimeOut();
        }
        confirmBtn.textContent = 'confirm';

        declineBtn.onclick = () => {
            super.initCloseBtn(myWindow, layout, document.body)
            title.innerHTML = 'process has been declined :('
            super.returnPrevTimeOut();
        }
        declineBtn.textContent = 'decline';

        myWindow.append(confirmTitle, btns);
        btns.append(confirmBtn, declineBtn);
    }
}