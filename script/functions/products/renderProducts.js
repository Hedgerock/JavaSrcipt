function productsBlock(parentElSelector, dataObj) {
    const parentEl = document.querySelector(parentElSelector);

    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    const productListEl = document.createElement('div');
    const promotion = document.createElement('span');
    const addToFavoritesBtn = document.createElement('button');
    const addToCompareBtn = document.createElement('button');
    const productPicture = document.createElement('a');
    const productTitle = document.createElement('h3');
    const productListLink = document.createElement('a');
    const productRates = document.createElement('div');
    const stars = document.createElement('a');
    const productInfo = document.createElement('div');
    const productInfoPrice = document.createElement('span');
    const productInfoOrder = document.createElement('button');
    const deliveryStatus = document.createElement('span')

    productListEl.className = 'product-list-elem';
    promotion.className = 'promotion';
    productListEl.dataset.id = dataObj.id;

    addToFavoritesBtn.className = 'add-to-favorites';
    addToFavoritesBtn.innerHTML = '<i class="add-to-favorites__icon fa-regular fa-heart"></i>'

    addToCompareBtn.className = 'add-to-compare';
    addToCompareBtn.innerHTML = '<i class="add-to-comapare__icon fa-solid fa-scale-balanced"></i>'

    productPicture.className = 'product-picture';
    productPicture.innerHTML = `<img class="product-picture__img" src=${dataObj.src} alt="">`

    productTitle.className = 'product-title';

    productListLink.className = 'product-list__link';
    productListLink.setAttribute('href', dataObj.href);
    productListLink.innerHTML = dataObj.title;

    productRates.className = 'product-rates';

    stars.className = 'stars';
    stars.setAttribute('href', dataObj.comments)
    stars.setAttribute('data-comments', dataObj.commentsAmount)
    stars.innerHTML = '<img class = "stars__img" src = "./img/stars.png" alt = "">'

    productInfo.className = 'product-info';

    productInfoPrice.className = 'product-info__price';
    productInfoPrice.setAttribute('data-actual', dataObj.price)
    productInfoPrice.innerHTML = dataObj.currentPrice;

    productInfoOrder.className = 'product-info__order';
    productInfoOrder.innerHTML = '<i class="fa-solid fa-cart-shopping"></i>';

    deliveryStatus.className = 'delivery-status';

    parentEl.append(productListEl);
    productListEl.append(addToFavoritesBtn, addToCompareBtn, productPicture, productTitle, productRates, productInfo);
    productTitle.append(productListLink);
    productRates.append(stars);
    productInfo.append(productInfoPrice, productInfoOrder);

    if (dataObj.promotion) {
        promotion.innerHTML = dataObj.promotion;
        productListEl.prepend(promotion)
    }

    if (dataObj.deliveryStatus) {
        deliveryStatus.innerHTML = dataObj.deliveryStatus;
        productListEl.append(deliveryStatus);
    }
}
