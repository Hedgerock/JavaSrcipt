import { coffeeMachines } from "./data.js";
import { CoffeeMachineMaker } from "./class.js";
import { clockwork, initMenu } from "./menu.js";

initMenu();
clockwork();

setInterval (() => {
    clockwork();
}, 1000)

coffeeMachines.forEach(item => {
    const newEl = new CoffeeMachineMaker(item.type, item.coffeeTypes, item.waterVolume, item.currentVolume, item.passport);
    newEl.buildMachine();
})
