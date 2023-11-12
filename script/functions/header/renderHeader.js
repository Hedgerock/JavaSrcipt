const headerLogo = document.createElement('div');
const headerContent = document.createElement('div');
const headerBurgerBtn = document.createElement('button');
const headerMenu = document.createElement('ul');
const headerCart = document.createElement('button');
const headerCompare = document.createElement('button');

let countForCart = 0;
let productIndex= 1;

headerLogo.className = 'shop-title';
headerLogo.innerHTML = '<img class="shop-title__img" src="./img/shopTitle.avif" alt ="">'

headerContent.className = 'shop-content';

headerBurgerBtn.className = 'burger-menu';
headerBurgerBtn.innerHTML = '<i class = "burger-menu__icon fa-solid fa-bars"></i>';


headerMenu.className = 'main-menu';

headerCart.className = 'cart-button';
headerCart.innerHTML = `
<i class = "cart-button__icon fa-solid fa-cart-shopping"></i>
<span></span>
`
headerCart.onclick = function() {
    if (countForCart == 0) {
        sum.style = 'display: none';
    } else {
        sum.style = 'display: flex';
    }

    window.scrollTo(0, 0);
    document.body.style = 'overflow: hidden';

    cartLayout.style = 'display: block';
    elementContainer.style = 'display: flex';
}

headerCompare.className = 'compare-button';
headerCompare.innerHTML = '<i class="compare-button__icon fa-solid fa-scale-balanced"></i>'


function header (parentElSelector) {
    const parentEl = document.querySelector(parentElSelector);

    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    parentEl.append(headerLogo, headerContent);
    headerContent.append(headerBurgerBtn, headerMenu, headerCart, headerCompare);
}