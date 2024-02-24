import { cH, cW, getSquareOrRectangle } from "./canvasData.js";

const clrInp = document.querySelector('.inputFgColor');
const bgInp = document.querySelector('.inputBgColor');

export function dynamicChanges() {
    const cWd = getValue('inputWdNum');
    const cHt = getValue('inputHtNum');

    const aX =  setMaxAndMin('inputAxRange', cW, cWd)
    const aY =  setMaxAndMin('inputAyRange', cH, cHt)

    clrInp.oninput = () => dynamicClrsAndPst(cWd, cHt, aX, aY)
    bgInp.oninput = () => dynamicClrsAndPst(cWd, cHt, aX, aY)

    dynamicClrsAndPst(cWd, cHt, aX, aY)
}

export function setMaxAndMin(selector, cS, cSd) {
    const el = document.querySelector(`.${selector}`)
    el.min = 1;
    el.max = cSd ? cS - cSd : cS 

    return cSd ? el.value : el
}

export function dynamicClrsAndPst(cWd, cHt, x, y) {
    const newClr = clrInp.value;
    const newBg = bgInp.value;
    getSquareOrRectangle({ aX: x, aY: y, cWd, cHt, color: newClr, background: newBg })
}

export function getValue(selector) {
    const inp = document.querySelector(`.${selector}`)
    return inp.value
}