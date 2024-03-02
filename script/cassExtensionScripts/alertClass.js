import { ModalWindow } from "./modalWindow.js";

export class AlertClass extends ModalWindow {
    create() {
        const myWindow = super.create();

        myWindow.classList.add(`${myWindow.className}_alert`);

        const title = document.createElement('h1');
        title.className = 'window__alert-title';
        title.textContent = 'Alert window';
        const alertInfo = document.createElement('span');
        alertInfo.className = 'text-alert'
        alertInfo.textContent = 'Some info'

        myWindow.append(title, alertInfo)
    }
}