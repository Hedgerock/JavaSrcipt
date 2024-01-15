import { coffeeVolume } from "./data.js";

export class CoffeeMachineMaker {
    _on = false;

    constructor(brand, type, volume, currentVolume, passport) {
        this.brand = brand;
        this.type = type;
        this.volume = volume;
        this.currentVolume = currentVolume;
        this.passport = passport;
    }

    checkOn () {
        return this._on
    }

    switch() {
        this._on = !this._on;
    }

    screenContent() {
        return this.checkOn() ? 'Welcome :) <br> select your drink' : '';
    }

    status() {
        return this.checkOn() ? 'online' : 'offline'
    }

    buildMachine () {
        const container = document.querySelector('.container-coffee-machine')
        const parent = document.createElement('div');
        parent.className = 'coffee-machine'

        const child = `
            <h2 class = "coffee-machine__title">${this.brand}</h2>
            <div class = "power-status" data-power = ${this.status() || 'offline'}></div>
            <div class = "information-screen">${this.screenContent()}</div>
            <div class = "buttons">
                <button class = "coffee-machine__switch-btn coffee-machine__switch-btn_on" data-status = ${this.checkOn()}>
                    <i class="fa-solid fa-power-off"></i>
                </button>
                <button class = "coffee-machine__switch-btn coffee-machine__switch-btn_off" data-status = ${!this.checkOn()} disabled>
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div class = "water-control">
                <span class = "water-control__current-value"></span>
                <button class = "water-control__restore-btn">restore water</button>
            </div>
            <div class = "sugar-control">
                <h3 class="sugar-control__title">sugar</h3>
                <div class = "sugar-buttons">
                    <button class = "sugar-control__btn sugar-control__btn_minus"><i class="fa-solid fa-minus"></i></button>
                    <span class = "sugar-control__total">0</span>
                    <button class = "sugar-control__btn sugar-control__btn_plus"><i class="fa-solid fa-plus"></i></button>
                </div>
            </div>
            <ul class = "coffee-selection"></ul>
            <button class = "coffee-machine__do-coffee">make coffee</button>
            <div class = "dispensing-window"></div>
        `
        parent.insertAdjacentHTML('beforeend', child);
        container.append(parent);

        this.initSwitchBtnWork(parent);
        this.renderCoffeeList(parent);
        this.percentageCalc(parent);
        this.btnIncrementerAndDecrementer(parent);
        this.preloadInfo(parent);
        this.makeCoffee(parent);
        this.restoreBtn(parent);
    }

    initSwitchBtnWork (parent) {
        const switchBtnOn = parent.querySelector('.coffee-machine__switch-btn_on');
        const switchBtnOff = parent.querySelector('.coffee-machine__switch-btn_off');
        switchBtnOff.onclick = () => {
            const cup = document.querySelector('.cup');
            if (cup) {
                const info = parent.querySelector('.information-screen');
                cup.remove();
                info.classList.remove('information-screen_invisible');
            }
            this.switch();
            this.changeBtnStatus(switchBtnOn, switchBtnOff);
            this.updateAttrAndBtns(switchBtnOn, switchBtnOff, parent);
            this.updateScreen(parent);
            this.removeAllChecked(parent);
            this.clearSpace(parent);
        }
        
        switchBtnOn.onclick = () => {
            this.switch();
            this.changeBtnStatus(switchBtnOff, switchBtnOn);
            this.updateAttrAndBtns(switchBtnOn, switchBtnOff, parent);
            this.updateScreen(parent);
        }
        
    }

    renderCoffeeList (parent) {
        const list = parent.querySelector('.coffee-selection');
        const arr = this.type;
        arr.forEach(coffee => {
            const passport = this.passport;
            const el = `
            <li class = "coffee-selection__element">
                <label>
                    ${coffee}
                    <input class = "inputs" type = "radio" name = ${passport}
                </label>
            </li>`
            list.insertAdjacentHTML('beforeend', el)
        })
    }

    changeBtnStatus (btnFirst, btnSecond) {
        btnFirst.removeAttribute('disabled');
        btnSecond.setAttribute('disabled', '');
    }

    updateAttrAndBtns (btnFirst, btnSecond, parent) {
        const btns = parent.querySelector('.power-status');
        btnFirst.dataset.status = !this.checkOn();
        btnSecond.dataset.status = this.checkOn();
        btns.dataset.power = this.status();
        this.preloadInfo(parent);
    }

    updateScreen (parent) {
        const info = parent.querySelector('.information-screen');
        info.innerHTML = this.screenContent();
    }

    percentageCalc(parent, secondArg) {
        const el = parent.querySelector('.water-control')
        if (!secondArg) {
            secondArg = 0;
        }
        const result = Math.floor((this.currentVolume - secondArg) / this.volume * 100);
        this.currentVolume = (result / 100) * this.volume;
        el.style.background = `linear-gradient(90deg, rgba(18,173,195,1) 0%, rgba(18,173,195,1) ${result}%, rgba(168,164,152,1) ${result}%)`;

        return result;
    }

    btnIncrementerAndDecrementer(parent) {
        const btnPlus = parent.querySelector('.sugar-control__btn_plus');
        const btnMinus = parent.querySelector('.sugar-control__btn_minus');
        const sugar = parent.querySelector('.sugar-control__total');
        const info = parent.querySelector('.information-screen');
        let count = Number(sugar.textContent);

        btnPlus.onclick = () => {
            if (!this.checkOn()) {
                return;
            }
            count++;
            if (count >= 10) {
                info.classList.add('information-screen_invisible')
                info.innerHTML = 'You have reached to the limit';
                count = 9;
                setTimeout(() => {
                    this.getSelectedCofee(parent);
                    info.classList.remove('information-screen_invisible')
                }, 2000)
                return;
            }
            sugar.textContent = count;
            this.getSelectedCofee(parent);
        }
        btnMinus.onclick = () => {
            if (!this.checkOn()) {
                return;
            }
            count--;
            if (count < 0) {
                info.classList.add('information-screen_invisible')
                info.innerHTML = `can't be less than 0`;
                count = 0;
                setTimeout(() => {
                    this.getSelectedCofee(parent);
                    info.classList.remove('information-screen_invisible')
                }, 2000)
                return;
            }

            sugar.textContent = count;
            this.getSelectedCofee(parent);
        }
    }

    preloadInfo(parent) {
        const inputs = parent.querySelectorAll(`.inputs`);
        const info = parent.querySelector('.information-screen');
        this.setInputsStatus(inputs);
        inputs.forEach(item => {
            item.onchange = () => {
                this.getSelectedCofee(parent);
                info.dataset.coffee = item.parentElement.textContent.trim();
            }
        })
    }

    setInputsStatus (inputs) {
        inputs.forEach(item => {
            this.checkOn() ? item.removeAttribute('disabled') : item.setAttribute('disabled', '');
            
        })
    }

    getDisabledStatus (inputs) {
        inputs.forEach(item => {
            item.setAttribute('disabled', '');
        })
    }

    getSelectedCofee(parent) {
        const info = parent.querySelector('.information-screen');
        const sugar = parent.querySelector('.sugar-control__total')
        info.innerHTML = '';
        info.dataset.sugar = `Sugar: ${sugar.textContent}`;
    }

    removeAllChecked(parent) {
        const inputs = parent.querySelectorAll(`.inputs`);
        inputs.forEach(item => {
            item.checked = false;
        })
    }

    clearSpace(parent) {
        const info = parent.querySelector('.information-screen');
        info.removeAttribute('data-sugar');
        info.removeAttribute('data-coffee');
    }

    makeCoffee (parent) {
        const makeCoffeeBtn = parent.querySelector('.coffee-machine__do-coffee');
        const inputs = parent.querySelectorAll('.inputs');
        const info = parent.querySelector('.information-screen');

        makeCoffeeBtn.onclick = () => {
            if (!this.checkOn() || !this.inputsValidation(parent) || this.percentageCalc(parent) <= 0.2) {
                return;
            }
            const secondArg = coffeeVolume[this.inputsValidation(parent)];
            console.log(secondArg);

            info.classList.add('information-screen_invisible');
            this.getDisabledStatus(inputs);
            this.percentageCalc(parent, secondArg);
            this.clearSpace(parent);
            info.innerHTML = 'Take your order'
            this.initCupForCoffee(parent);
            this.removeAllChecked(parent);
        }
    }

    inputsValidation(parent) {
        const inputs = parent.querySelectorAll(`.inputs`);
        let isChecked = false;
    
        for (let key in inputs) {
            if (inputs[key].checked) {
                return inputs[key].parentElement.textContent.trim().replace(/\s/, '').toLowerCase();
            }
        }
    
        return isChecked;
    }

    initCupForCoffee (parent) {
        const sugar = parent.querySelector('.sugar-control__total');

        const parentEl = parent.querySelector('.dispensing-window');
        const cup = document.createElement('div');
        const cupTitle = document.createElement('span');
        const sugarAmount = document.createElement('span');

        cup.className = 'cup';
        cupTitle.className = 'cup__title';
        sugarAmount.className = 'cup__sugar-amount';

        cupTitle.innerHTML = this.inputsValidation(parent).toUpperCase();
        sugarAmount.innerHTML = `${sugar.textContent} sugar`;

        cup.onclick = () => {
            const inputs = parent.querySelectorAll('.inputs');
            const info = parent.querySelector('.information-screen');
            info.innerHTML = 'Enjoy your day :)'
            cup.remove();

            setTimeout(() => {
                info.classList.remove('information-screen_invisible');
                info.innerHTML = this.screenContent();
                this.setInputsStatus(inputs);
            }, 2000);
        }

        cup.append(cupTitle, sugarAmount);
        parentEl.append(cup);
    }

    restoreBtn(parent) {
        const restoreBtn = parent.querySelector('.water-control__restore-btn')

        restoreBtn.onclick = () => {
            this.currentVolume = this.volume;
            this.percentageCalc(parent);
        }
    } 
}