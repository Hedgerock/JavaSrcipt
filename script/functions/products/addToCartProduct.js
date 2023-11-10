let countForCart = 0;
let productIndex= 1;

function addToCart() {
    const availableProducts = document.querySelectorAll('.product-info__order');
    const cartBtn = document.querySelector('.cart-button');
    const totalElements = cartBtn.querySelector('span');

    availableProducts.forEach(function(product, index) {
        let isProductInCart = false;
        let productEl;

        product.onclick = function() {
            if (isProductInCart) {
                isProductInCart = false;
                productEl.remove()
                product.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
                countForCart--;
                updateCartCount();
                sum.innerHTML = `Total: ${updatetotalSum()} ₴`;
                if (countForCart == 0) {
                    totalElements.innerHTML = '';
                    elementsInCartBlockTitle.style = 'display:flex';
                } else {
                    totalElements.innerHTML = countForCart;
                }
                return;
            }
            countForCart++;
            totalElements.innerHTML = countForCart;
            productEl = initProductInCartBlock(cartSelector, products[index], product, totalElements, () => isProductInCart = false);
            product.innerHTML = '<i class="fa-solid fa-xmark"></i>';
            elementsInCartBlockTitle.style = 'display:none';
            isProductInCart = true;
            sum.innerHTML = `Total: ${updatetotalSum()} ₴`;
        }
    })
}
