function initNoScrollToBody() {
    document.body.classList.add('no-scroll');
    window.scrollTo(0, 0);
}

function removeNoScrollToBody() {
    document.body.removeAttribute('class');
}
 
function renderContent(parentEl, dataArr, functionName) {
    if(!parentEl) {
        console.warn(`${parentEl} not found`);
        return
    }

    dataArr.forEach(function(item) {
        functionName(parentEl, item);
    })
}

function strToNum(str) {
    let newStr = str.replaceAll(' ', '');

    return Number(newStr);
}

function numToStr(num) {
    let newNum = num.toString();

    let result = '';
    for (let i = newNum.length - 1; i >= 0; i--) {
        if ((newNum.length - i) % 3 == 0) {
            result += newNum[i] + ' ';
        } else {
            result += newNum[i];
        }
    }

    return result.split('').reverse().join('');
}

function getTotalCartCount() {
    let total = 0;
    for (let product in cart) {
        total += cart[product];
    }
    return total;
}

function updateCartCount() {
    const cartElements = document.querySelectorAll('.product-element');
    cartElements.forEach(function(item, index) {
        const cartCount = item.querySelector('.product-position');
        cartCount.textContent = index + 1;
    })
}

function updatetotalSum() {
    const totalPrice = document.querySelectorAll('.total-price');
    let totalSum = 0;

    totalPrice.forEach(function(item) {
        totalSum += strToNum(item.textContent);
    })

    return numToStr(totalSum);
}

function objectLoopValidation(obj, arr, booleanValue) {

    for (let item of obj) {
        const valueEl = item.value;

        if (valueEl.trim().length == 0) {
            item.classList.add('sign-up-label__input_error');
            booleanValue = false;
        } else {
            item.classList.remove('sign-up-label__input_error');
            arr.push([`${item.name} ${item.value}`])
        }
    }

    return booleanValue;
}