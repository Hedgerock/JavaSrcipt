import { clockwork, initMenu } from "../menu.js";
import { renderMainPage } from "./functions/renderFunctions.js";

initMenu();
clockwork();

setInterval (() => {
    clockwork();
}, 1000)

renderMainPage();
