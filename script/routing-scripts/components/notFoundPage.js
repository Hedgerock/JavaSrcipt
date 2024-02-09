export function notFoundPage() {
    const errDiv = document.createElement('div');
    const errDivTitle = document.createElement('h2');
    const backHomeLink = document.createElement('a');

    errDiv.className = 'error';
    errDivTitle.className = 'error__title';
    errDivTitle.textContent = '404 Page not found'
    backHomeLink.className = 'error__back-link';
    backHomeLink.textContent = 'Back to Home page'
    backHomeLink.href = '#';
    
    errDiv.append(errDivTitle, backHomeLink);

    return errDiv
}