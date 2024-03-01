import { clockwork, initMenu } from "../menu.js";
import dataRoute from "./data.js";
import { checkRoute } from '../routing-scripts/hashFunc.js'

initMenu();
clockwork();

setInterval (() => {
    clockwork();
}, 1000)

checkRoute(dataRoute);
addEventListener('hashchange', () => { checkRoute(dataRoute) })