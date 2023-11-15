function headerMenuContent(parentEl, dataObj) {
    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    const headerMenuElement = document.createElement('li');
    const headerMenuLink = document.createElement('a');

    headerMenuElement.className = 'menu-element';

    headerMenuLink.className = 'menu-element__link';
    headerMenuLink.setAttribute('href', dataObj.link);
    headerMenuLink.textContent = dataObj.title;

    parentEl.append(headerMenuElement);
    headerMenuElement.append(headerMenuLink);
}