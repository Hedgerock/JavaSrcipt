import { dynamicChanges } from "./dynamicFunc.js";

export function renderInputS(inpNum, inputS) {
    let value = inputS.value;
    if (!value || value <= 0) {
        value = 1;
    }

    inpNum.value = value;

    dynamicChanges();
}

export function renderInpNum(inpNum, inputS) {
    let value = inpNum.value;

    if (!value || value <= 0) {
        value = 1;
        inpNum.value = value;
    }

    if (/[eE]/.test(value)) {
        value = value.replace(/\D/g, '');
        inpNum.value = value;
    }

    if (+value >= inpNum.max) {
        value = inpNum.max
        inpNum.value = inpNum.max
    }

    inputS.value = value;

    dynamicChanges();
}