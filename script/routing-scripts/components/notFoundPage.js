import { createEl } from "../utils.js";

export function notFoundPage() {
    window.location.href = '#/empty'

    const errDiv = createEl('error', 'div');
    const errDivTitle = createEl('error__title', 'h2', '404 Page not found');
    const backHomeLink = createEl('error__back-link', 'a', 'Back to Home page');

    backHomeLink.href = '#/';
    
    errDiv.append(errDivTitle, backHomeLink);

    return errDiv
}