import { coffeeMachines } from "./data.js";
import { CoffeeMachineMaker } from "./class.js";

coffeeMachines.forEach(item => {
    const newEl = new CoffeeMachineMaker(item.type, item.coffeeTypes, item.waterVolume, item.currentVolume, item.passport);
    newEl.buildMachine();
})
