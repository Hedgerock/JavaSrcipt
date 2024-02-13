export function createEl(className, tag, textContent) {
    const el = document.createElement(tag);
    el.className = className;
    if (textContent) {
        el.textContent = textContent;
    }

    return el
}

export function notFound(parent) {
    const title = createEl('not-found', 'h1');
    title.textContent = 'Not found :('
    parent.append(title);
}