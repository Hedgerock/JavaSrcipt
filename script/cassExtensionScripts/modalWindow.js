import { MyWindow } from "./myWindow.js";

export class ModalWindow extends MyWindow {
    create() {
        const myWindow = super.create();
        const layout = document.createElement('div');
        const body = document.body;
        layout.className = 'layout';
        const closeBtn = document.createElement('button');
        closeBtn.className = 'close-btn'
        closeBtn.textContent = 'close';

        closeBtn.onclick = () => {
            const title = this.initTitle();
            this.initCloseBtn(myWindow, layout, body);
            title.innerHTML = 'Window has closed';
            this.returnPrevTimeOut();
        }

        body.append(layout);
        body.style.overflow = 'hidden';
        window.scrollTo(0, 0);
        myWindow.append(closeBtn);

        return myWindow;
    }

    initTitle() {
        const title = document.querySelector('.container__title');
        return title;
    }

    initCloseBtn(myWindow, layout, body) {
        this.animation(myWindow, layout, body);
        this.disabledAndEnabledBtns();
    }

    returnPrevTimeOut() {
        const title = this.initTitle();

        setTimeout(() => {
            title.innerHTML = 'Buttons :)'
        }, 2700);
    }

    disabledAndEnabledBtns() {
        const btns = document.querySelectorAll('.container__select-btn');

        btns.forEach(btn => {
            btn.setAttribute('disabled', '');

            setTimeout(() => {
                btn.removeAttribute('disabled')
            }, 2700)
        })
    }

    animation (el, layout, body) {
        el.style.opacity = 1;
        setTimeout (() => {
            el.style.opacity = 0;
    
            setTimeout(() => {
                el.removeAttribute('style');
                el.remove();
                layout.remove();
                body.removeAttribute('style');
            }, 700)
        }, 10)
    }
}