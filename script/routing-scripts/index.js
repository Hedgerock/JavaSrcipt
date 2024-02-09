import { checkRoute } from "./hashFunc.js";
import { changeActive } from "./menuManipulations.js";
import { renderMenu } from "./render/renderMenu.js";

renderMenu();
checkRoute();
changeActive();

addEventListener('hashchange', () => { checkRoute() })