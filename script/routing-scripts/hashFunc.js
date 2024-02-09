import routes from "./data.js";
import { render } from "./render/renderComponent.js";

export async function checkRoute(value) {
    let hash = getHash();
    
    if (value) {
        hash = value;
    }

    let route = routes.find(r => r.path[1] === hash);

    if (!route) {
        route = routes.find(r => r.path[0] === '**');
    }

    const component = await checkComponent(route);

    render(component);
}

export function getHash() {
    const hash = window.location.hash

    return hash.replace(/^\#/g, '');
}

export async function checkComponent(route) {
    let component;

    try { component = await route.component() }
    catch { component = '<h2>coming soon :)</h2>' }

    return component;
}