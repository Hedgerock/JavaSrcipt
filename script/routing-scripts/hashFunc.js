import routes from "./data.js";
import { changeActive } from "./menuManipulations.js";
import { render } from "./render/renderComponent.js";

export async function checkRoute(value) {
    let { hash, id, searchParams } = getHash();
    
    if (value) {
        hash = value;
    }

    let route = routes.find(r => r.path[1] === hash);

    if (!route) {
        route = routes.find(r => r.path[0] === '**');
    }

    const component = await checkComponent(route, hash, id, searchParams);

    changeActive();

    render(component);
}

export function getHash() {
    let hash = window.location.hash.replace(/^\#/g, '')
    const resources = hash.split('/').filter(item => item);
    const searchParams = hash.split('?')[1];
    hash = hash.split('?')[0];
    if (!hash) {
        hash = '/';
    }

    if (resources.length === 2) {
        hash = `/${resources[0]}/:id`
    }

    console.log(searchParams);

    return { hash, id: resources[1], searchParams }
}

export async function checkComponent(route, hash, id, searchParams) {
    let component;

    try { component = await route.component({ hash, id, searchParams }) }
    catch { component = '<h2>coming soon :)</h2>' }

    return component;
}