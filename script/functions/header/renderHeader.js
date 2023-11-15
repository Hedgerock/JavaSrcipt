const headerLogo = document.createElement('div');
const headerLogoImg = document.createElement('img');
const headerContent = document.createElement('div');
const headerBurgerBtn = document.createElement('button');
const headerBurgerBtnIcon = document.createElement('i');
const headerMenu = document.createElement('ul');
const headerCart = document.createElement('button');
const headerCartIcon = document.createElement('i');
const cartTotalProducts = document.createElement('span');
const headerCompare = document.createElement('button');
const headerCompareIcon = document.createElement('i');
const authorizationBlock = document.createElement('div');
const signUpBtn = document.createElement('button');
const signInBtn = document.createElement('button');

let productIndex= 1;
let countForCart = 0;

headerLogo.className = 'shop-title';

headerLogoImg.className = "shop-title__img";
headerLogoImg.setAttribute('src', "./img/shopTitle.avif");
headerLogoImg.setAttribute('alt', '');

headerContent.className = 'shop-content';
headerBurgerBtn.className = 'burger-menu';
headerBurgerBtnIcon.className = 'burger-menu__icon fa-solid fa-bars';
headerMenu.className = 'main-menu';
headerCart.className = 'cart-button';
headerCartIcon.className = 'cart-button__icon fa-solid fa-cart-shopping';

headerCart.onclick = function() {
    if (countForCart == 0) {
        sum.classList.add('sum_hidden');
    } else {
        sum.classList.remove('sum_hidden');
    }

    initNoScrollToBody();

    cartLayout.classList.remove('cart-layout_hidden');
    elementContainer.classList.remove('element-container_hidden');
}

headerCompare.className = 'compare-button';
headerCompareIcon.className = 'compare-button__icon fa-solid fa-scale-balanced';

authorizationBlock.className = 'authorization-block'

signUpBtn.className = 'authorization-block__btn';
signUpBtn.textContent = 'sign up'

signInBtn.className = 'authorization-block__btn';
signInBtn.textContent = 'sign in';


function header (parentElSelector) {
    const parentEl = document.querySelector(parentElSelector);

    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    parentEl.append(headerLogo, headerContent);
    headerLogo.append(headerLogoImg);
    headerContent.append(headerBurgerBtn, headerMenu, headerCart, headerCompare, authorizationBlock);
    headerBurgerBtn.append(headerBurgerBtnIcon);
    headerCart.append(headerCartIcon, cartTotalProducts);
    headerCompare.append(headerCompareIcon);
    authorizationBlock.append(signUpBtn, signInBtn);
}