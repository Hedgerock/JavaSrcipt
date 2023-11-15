const cartLayout = document.createElement('div');
const elementContainer = document.createElement('div');
const closeCartBtn = document.createElement('button');
const closeCartBtnIcon = document.createElement('i');
const elementsInCartBlock = document.createElement('div');
const elementsInCartBlockTitle = document.createElement('h2');
const sum = document.createElement('div');

cartLayout.className = 'cart-layout cart-layout_hidden';
cartLayout.onclick = function() {
    hideFunc();
}

elementContainer.className = 'element-container element-container_hidden';

closeCartBtn.className = 'close-cart-btn';
closeCartBtnIcon.className = 'fa-solid fa-x'
closeCartBtn.onclick = function() {
    hideFunc();
}

elementsInCartBlock.className = 'elements-in-cart-block';

elementsInCartBlockTitle.className = 'element-in-cart-block__title';
elementsInCartBlockTitle.textContent = 'Nothing in the cart';

sum.className = 'sum';

function initCart() {
    document.body.prepend(cartLayout, elementContainer);
    elementContainer.append(closeCartBtn, elementsInCartBlock, sum);
    closeCartBtn.append(closeCartBtnIcon);
    elementsInCartBlock.append(elementsInCartBlockTitle);
}


function hideFunc() {
    removeNoScrollToBody();
    cartLayout.className = 'cart-layout cart-layout_hidden';
    elementContainer.className = 'element-container element-container_hidden';
}