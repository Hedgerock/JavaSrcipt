const changeModeBtn = document.querySelector('.btn-mode');

export function initTheme() {
    const currentTheme = localStorage.getItem('currentTheme') || 'light'
    document.body.dataset.theme = currentTheme
    changeIcon(currentTheme, changeModeBtn);
}

export function changeIcon(el) {
    el === 'light' 
    ? changeModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>' 
    : changeModeBtn.innerHTML = '<i class="fa-regular fa-moon"></i>'
}

export function animation (el) {
    el.style.opacity = 0;
    setTimeout (() => {
        el.style.opacity = 1;

        setTimeout(() => {
            el.removeAttribute('style');
        }, 700)
    }, 10)
}