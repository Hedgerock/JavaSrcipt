const cartLayout = document.createElement('div');
const elementContainer = document.createElement('div');
const closeCartBtn = document.createElement('button');
const elementsInCartBlock = document.createElement('div');
const elementsInCartBlockTitle = document.createElement('h2');
const sum = document.createElement('div');

cartLayout.className = 'cart-layout';
cartLayout.style = 'display: none';
cartLayout.onclick = function() {
    hideFunc();
}

elementContainer.className = 'element-container';
elementContainer.style = 'display: none';

closeCartBtn.className = 'close-cart-btn';
closeCartBtn.innerHTML = '<i class="fa-solid fa-x"></i>';
closeCartBtn.onclick = function() {
    hideFunc();
}

elementsInCartBlock.className = 'elements-in-cart-block';

elementsInCartBlockTitle.className = 'element-in-cart-block__title';
elementsInCartBlockTitle.innerHTML = 'Nothing in the cart';

sum.className = 'sum';

function initCart() {
    document.body.prepend(cartLayout, elementContainer);
    elementContainer.append(closeCartBtn, elementsInCartBlock, sum);
    elementsInCartBlock.append(elementsInCartBlockTitle);
}


function hideFunc() {
    document.body.removeAttribute('style');
    cartLayout.style = 'display: none';
    elementContainer.style = 'display: none';
}