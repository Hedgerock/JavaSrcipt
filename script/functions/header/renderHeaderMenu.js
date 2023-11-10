function headerMenuContent(parentEl, dataObj) {
    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    const headerMenuElement = document.createElement('li');
    headerMenuElement.className = 'menu-element';
    headerMenuElement.innerHTML = `<a class = "menu-element__link" href = ${dataObj.link}>${dataObj.title}</a>`;

    parentEl.append(headerMenuElement);
}