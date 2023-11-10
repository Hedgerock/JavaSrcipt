function initProductInCartBlock(parentElSelector, dataObj, product, countInCart, event) {
    const parentEl = elementContainer.querySelector(parentElSelector);

    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    const productEl = document.createElement('div');
    const productContent = document.createElement('div');
    const productPosition = document.createElement('div');
    const productImg = document.createElement('div');
    const productImgPicture = document.createElement('img');
    const productElementLink = document.createElement('a');
    const totalElements = document.createElement('div');
    const totalElementRemoveElBtn = document.createElement('button');
    const totalElementsCurrentValue = document.createElement('span');
    const totalElementAddElBtn = document.createElement('button');
    const totalPrice = document.createElement('div');
    const removerElement = document.createElement('button');

    productEl.className = 'product-element';
    productContent.className = 'product-content';

    productPosition.className = 'product-position';
    productPosition.innerHTML = productIndex;
    productIndex++;

    productImg.className = 'product-img';

    productImgPicture.className = 'product-img__picture';
    productImgPicture.setAttribute('src', dataObj.src);
    productImgPicture.setAttribute('alt', '');

    productElementLink.className = 'product-element__link';
    productElementLink.setAttribute('href', dataObj.href);
    productElementLink.innerHTML = dataObj.title;

    totalElements.className = 'total-elements';

    totalElementsCurrentValue.className = 'total-elements__current-value';
    totalElementsCurrentValue.innerHTML = 1;

    totalElementRemoveElBtn.className = 'total-elements__btn total-elements__btn_remove';
    totalElementRemoveElBtn.innerHTML = '<i class="fa-solid fa-minus"></i>';

    let countProduct = Number(totalElementsCurrentValue.innerText);
    let price = dataObj.currentPrice;

    totalPrice.className = 'total-price';
    totalPrice.innerHTML = price;

    totalElementRemoveElBtn.onclick = function() {
        if (countProduct == 1) {
            alert('Can be at least 1 element');
            return;
        }
        countProduct--;
        countForCart--;
        calculator(dataObj, countProduct, totalPrice, price, totalElementsCurrentValue, countInCart, countForCart);
        sum.innerHTML = `Total: ${updatetotalSum()} ₴`;
    }

    totalElementAddElBtn.className = 'total-elements__btn total-elements__btn_add';
    totalElementAddElBtn.innerHTML = '<i class="fa-solid fa-plus"></i>';

    totalElementAddElBtn.onclick = function() {
        if (countProduct == 10) {
            alert('You have reached the limit 10 is max');
            return;
        }
        countProduct++;
        countForCart++;
        calculator(dataObj, countProduct, totalPrice, price, totalElementsCurrentValue, countInCart, countForCart);
        sum.innerHTML = `Total: ${updatetotalSum()} ₴`;
    }

    removerElement.className = 'remove-element';
    removerElement.innerHTML = 'remove from cart';
    removerElement.onclick = function() {
        countForCart = countForCart - countProduct;
        if (countForCart == 0) {
            countInCart.innerHTML = '';
            elementsInCartBlockTitle.style = 'display:flex';
            productIndex = 1;
        } else {
            countInCart.innerHTML = countForCart;
        } 

        product.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';
        productEl.remove();
        updateCartCount();
        let result = updatetotalSum();
        if (result == '0') {
            sum.innerHTML = ''
        } else {
            sum.innerHTML =`Total: ${result} ₴`;
        }
        event();
    }


    parentEl.append(productEl);
    productEl.append(productContent, totalElements, totalPrice, removerElement);
    productContent.append(productPosition,productImg, productElementLink);
    productImg.append(productImgPicture);
    totalElements.append(totalElementRemoveElBtn, totalElementsCurrentValue, totalElementAddElBtn);

    return productEl;
}

function calculator(dataObj, countProduct, totalPrice, price, totalElementsCurrentValue, countInCart, countForCart) {
    price = strToNum(dataObj.currentPrice) * countProduct;
    totalPrice.innerHTML = numToStr(price);
    totalElementsCurrentValue.innerHTML = countProduct;
    countInCart.innerHTML = countForCart;
}

function totalSum() {
    const totalElementsValue = document.querySelectorAll('.total-price');
    let result = 0;

    for (let i = 0; i < totalElementsValue.length; i++) {
        result += totalElementsValue.innerText;
    }

    return result;
}