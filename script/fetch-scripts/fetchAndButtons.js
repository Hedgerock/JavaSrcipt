const mainPart = document.querySelector('.main-part');

const gif = document.createElement('img');
gif.className = 'gif';
gif.src = '/pictures/preloader.gif';

export function fetchFunction(url, func, renderFunc, elFunc) {
    setTimeout(() => {
        mainPart.appendChild(gif);
        fetch(url)
            .then((response) => response.json())
            .then((json) => {
                if (gif) {gif.remove()}
                func(json, renderFunc, elFunc);
            });
    }, 1)
}

export function buttonsSwitcher(elementE) {
    if (elementE.target.classList.contains('fetch-buttons__current-btn')) {
        const btns = document.querySelectorAll('.fetch-buttons__current-btn')
        btns.forEach(item => {
            item !== elementE.target ? item.removeAttribute('disabled') : item.setAttribute('disabled', '');
        })
        mainPart.innerHTML = '';
    }
}