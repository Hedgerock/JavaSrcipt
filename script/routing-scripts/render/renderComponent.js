import { outlet } from "../data.js";

export function render(component) {
    outlet.innerHTML = '';

    outlet.append(component);
}