export function changeActive() {
    const links = document.querySelectorAll('.header-menu a');
    const hash = window.location.hash;

    links.forEach(item => {
        item.classList.remove('active');
    }) 

    if (hash === '#/') {
        links[0].classList.add('active');
        return;
    }

    links.forEach(link => {
        const href = link.getAttribute('href');

        if (href !== '#/' && hash.includes(href)) {
            link.classList.add('active');
        }
    }) 
}