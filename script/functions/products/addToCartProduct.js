function addToCart() {
    const availableProducts = document.querySelectorAll('.product-info__order');
    const alailableProductsChild = document.querySelectorAll('.product-info__icon');

    availableProducts.forEach(function(product, index) {
        let isProductInCart = false;
        let productEl;
        let countProductInCart;
        product.onclick = function() {
            if (isProductInCart) {
                alailableProductsChild[index].className = 'fa-solid fa-cart-shopping';
                countForCart = Math.abs(countForCart - Number(countProductInCart.textContent));
                isProductInCart = false;
                productEl.remove();
                sum.textContent = `Total: ${updatetotalSum()} ₴`;
                updateCartCount();
                if (countForCart == 0) {
                    cartTotalProducts.textContent = '';
                    elementsInCartBlockTitle.classList.remove('element-in-cart-block__title_hidden');
                    sum.classList.add('sum_hidden');
                } else {
                    cartTotalProducts.textContent = countForCart;
                    sum.classList.remove('sum_hidden');
                }
                return;
            }
            countForCart++;
            cartTotalProducts.textContent = countForCart;
            productEl = initProductInCartBlock(cartSelector, products[index], alailableProductsChild[index], cartTotalProducts, () => isProductInCart = false);
            alailableProductsChild[index].className = 'fa-solid fa-xmark';
            countProductInCart = productEl.querySelector('.total-elements__current-value');
            elementsInCartBlockTitle.classList.add('element-in-cart-block__title_hidden');
            isProductInCart = true;
            sum.textContent = `Total: ${updatetotalSum()} ₴`;
            updateCartCount();
        }
    })
}
