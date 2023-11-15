function initProductInCartBlock(parentElSelector, dataObj, productChild, countInCart, event) {
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
    const totalElementRemoveElBtnIcon = document.createElement('i');
    const totalElementsCurrentValue = document.createElement('span');
    const totalElementAddElBtn = document.createElement('button');
    const totalElementAddElBtnIcon = document.createElement('i');
    const totalPrice = document.createElement('div');
    const removerElement = document.createElement('button');

    productEl.className = 'product-element';
    productContent.className = 'product-content';

    productPosition.className = 'product-position';
    productPosition.textContent = productIndex;
    productIndex++;

    productImg.className = 'product-img';

    productImgPicture.className = 'product-img__picture';
    productImgPicture.setAttribute('src', dataObj.src);
    productImgPicture.setAttribute('alt', '');

    productElementLink.className = 'product-element__link';
    productElementLink.setAttribute('href', dataObj.href);
    productElementLink.textContent = dataObj.title;

    totalElements.className = 'total-elements';

    totalElementsCurrentValue.className = 'total-elements__current-value';
    totalElementsCurrentValue.textContent = 1;

    totalElementRemoveElBtn.className = 'total-elements__btn total-elements__btn_remove';
    totalElementRemoveElBtnIcon.className = 'fa-solid fa-minus'

    let countProduct = Number(totalElementsCurrentValue.textContent);
    let price = dataObj.currentPrice;

    totalPrice.className = 'total-price';
    totalPrice.textContent = price;

    totalElementRemoveElBtn.onclick = function() {
        if (countProduct == 1) {
            alert('Can be at least 1 element');
            return;
        }
        countProduct--;
        countForCart--;
        calculator(dataObj, countProduct, totalPrice, price, totalElementsCurrentValue, countInCart, countForCart);
        sum.textContent = `Total: ${updatetotalSum()} ₴`;
    }

    totalElementAddElBtn.className = 'total-elements__btn total-elements__btn_add';
    totalElementAddElBtnIcon.className = 'fa-solid fa-plus'

    totalElementAddElBtn.onclick = function() {
        if (countProduct == 10) {
            alert('You have reached the limit 10 is max');
            return;
        }
        countProduct++;
        countForCart++;
        calculator(dataObj, countProduct, totalPrice, price, totalElementsCurrentValue, countInCart, countForCart);
        sum.textContent = `Total: ${updatetotalSum()} ₴`;
    }

    removerElement.className = 'remove-element';
    removerElement.textContent = 'remove from cart';
    removerElement.onclick = function() {
        countForCart = countForCart - countProduct;
        if (countForCart == 0) {
            countInCart.textContent = '';
            elementsInCartBlockTitle.classList.remove('element-in-cart-block__title_hidden')
            sum.classList.add('sum_hidden')
            productIndex = 1;
        } else {
            countInCart.textContent = countForCart;
            sum.classList.remove('sum_hidden');
        } 

        productChild.className = 'fa-solid fa-cart-shopping';
        productEl.remove();
        updateCartCount();
        let result = updatetotalSum();
        if (result == '0') {
            sum.classList.add('sum_hidden')
        } else {
            sum.textContent =`Total: ${result} ₴`;
        }
        event();
    }


    parentEl.append(productEl);
    productEl.append(productContent, totalElements, totalPrice, removerElement);
    productContent.append(productPosition,productImg, productElementLink);
    productImg.append(productImgPicture);
    totalElements.append(totalElementRemoveElBtn, totalElementsCurrentValue, totalElementAddElBtn);
    totalElementRemoveElBtn.append(totalElementRemoveElBtnIcon);
    totalElementAddElBtn.append(totalElementAddElBtnIcon);

    return productEl;
}

function calculator(dataObj, countProduct, totalPrice, price, totalElementsCurrentValue, countInCart, countForCart) {
    price = strToNum(dataObj.currentPrice) * countProduct;
    totalPrice.textContent = numToStr(price);
    totalElementsCurrentValue.textContent = countProduct;
    countInCart.textContent = countForCart;
}

function totalSum() {
    const totalElementsValue = document.querySelectorAll('.total-price');
    let result = 0;

    for (let i = 0; i < totalElementsValue.length; i++) {
        result += totalElementsValue.textContent;
    }

    return result;
}