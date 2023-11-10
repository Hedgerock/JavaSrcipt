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

function updateCartCount() {
    const cartElements = document.querySelectorAll('.product-element');
    cartElements.forEach(function(item, index) {
        const cartCount = item.querySelector('.product-position');
        cartCount.innerHTML = index + 1;
    })
}

function updatetotalSum() {
    const totalPrice = document.querySelectorAll('.total-price');
    let totalSum = 0;

    totalPrice.forEach(function(item) {
        totalSum += strToNum(item.innerHTML);
    })

    return numToStr(totalSum);
}