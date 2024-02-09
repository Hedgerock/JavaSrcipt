import { getHash } from "./hashFunc.js";

export function changeActive() {
    const links = document.querySelectorAll('.header-menu a');
    const hash = getHash();

    links.forEach(link => {
        link.onclick = function() {
            links.forEach(item => {
                item.classList.remove('active');
            }) 

            link.classList.add('active');
        }

        if (link.getAttribute('href') === `#${hash}`) {
            link.classList.add('active');
        }
    }) 
}