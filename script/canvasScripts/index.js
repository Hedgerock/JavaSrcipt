import { clockwork, initMenu } from "../menu.js";
import { cH, cW, getSquareOrRectangle } from "./canvasData.js";
import { dynamicChanges, getValue } from "./dynamicFunc.js";
import { setParameters } from "./setParams.js";

clockwork();

setInterval (() => {
    clockwork();
}, 1000)

const bgClr = getValue('inputBgColor');
const clr = getValue('inputFgColor')

setParameters('inputs-box_w', 'inputWdNum', 'inputWidthRange', cW)
setParameters('inputs-box_h', 'inputHtNum', 'inputHeightRange', cH)
setParameters('inputs-box_x', 'inputAxNum', 'inputAxRange', cW)
setParameters('inputs-box_y', 'inputAyNum', 'inputAyRange', cH)

dynamicChanges()

getSquareOrRectangle({ background: bgClr, color: clr });