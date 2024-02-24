import { setMaxAndMin } from "./dynamicFunc.js";
import { renderInpNum, renderInputS } from "./renderFunc.js";

export function setParameters(s1, s2, s3, cS) {
    const inpBox = document.querySelector(`.${s1}`);    //first selector
    const inpNum = inpBox.querySelector(`.${s2}`);      //second selector

    const inputS = setMaxAndMin(s3, cS);                //third selector
    const value = inputS.value;
    
    inpNum.max = cS;                                    //context size (width or height)
    inpNum.value = value;
    inputS.step = 1;

    inpNum.oninput = () => renderInpNum(inpNum, inputS);


    inputS.oninput = () => renderInputS(inpNum, inputS);
}