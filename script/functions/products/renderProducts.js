function productsBlock(parentElSelector, dataObj) {
    const parentEl = document.querySelector(parentElSelector);

    if (!parentEl) {
        console.warn(`${parentEl} not found`);
        return;
    }

    const productListEl = document.createElement('div');
    const promotion = document.createElement('span');
    const addToFavoritesBtn = document.createElement('button');
    const addToFavoritesBtnIcon = document.createElement('i');
    const addToCompareBtn = document.createElement('button');
    const addToCompareBtnIcon = document.createElement('i');
    const productPicture = document.createElement('a');
    const productPictureImg = document.createElement('img');
    const productTitle = document.createElement('h3');
    const productListLink = document.createElement('a');
    const productRates = document.createElement('div');
    const stars = document.createElement('a');
    const starsImg = document.createElement('img');
    const productInfo = document.createElement('div');
    const productInfoPrice = document.createElement('span');
    const productInfoOrder = document.createElement('button');
    const productInfoOrderIcon = document.createElement('i');
    const deliveryStatus = document.createElement('span')

    productListEl.className = 'product-list-elem';
    promotion.className = 'promotion';
    productListEl.dataset.id = dataObj.id;

    addToFavoritesBtn.className = 'add-to-favorites';
    addToFavoritesBtnIcon.className = 'add-to-favorites__icon fa-regular fa-heart';
    addToCompareBtn.className = 'add-to-compare';
    addToCompareBtnIcon.className = 'add-to-comapare__icon fa-solid fa-scale-balanced'

    productPicture.className = 'product-picture';
    productPicture.setAttribute('href', dataObj.href);

    productPictureImg.className = 'product-picture__img';
    productPictureImg.setAttribute('src', dataObj.src);
    productPictureImg.setAttribute('alt', '');

    productTitle.className = 'product-title';

    productListLink.className = 'product-list__link';
    productListLink.setAttribute('href', dataObj.href);
    productListLink.textContent = dataObj.title;

    productRates.className = 'product-rates';

    stars.className = 'stars';
    stars.setAttribute('href', dataObj.comments);
    stars.setAttribute('data-comments', dataObj.commentsAmount);

    starsImg.className = 'stars__img';
    starsImg.setAttribute('src', './img/stars.png');
    starsImg.setAttribute('alt', '');

    productInfo.className = 'product-info';

    productInfoPrice.className = 'product-info__price';
    productInfoPrice.setAttribute('data-actual', dataObj.price)
    productInfoPrice.textContent = dataObj.currentPrice;

    productInfoOrder.className = 'product-info__order';
    productInfoOrderIcon.className = 'product-info__icon fa-solid fa-cart-shopping';

    deliveryStatus.className = 'delivery-status';

    parentEl.append(productListEl);
    productListEl.append(addToFavoritesBtn, addToCompareBtn, productPicture, productTitle, productRates, productInfo);
    addToFavoritesBtn.append(addToFavoritesBtnIcon);
    addToCompareBtn.append(addToCompareBtnIcon);
    productPicture.append(productPictureImg);
    productTitle.append(productListLink);
    productRates.append(stars);
    stars.append(starsImg);
    productInfo.append(productInfoPrice, productInfoOrder);
    productInfoOrder.append(productInfoOrderIcon);

    if (dataObj.promotion) {
        promotion.textContent = dataObj.promotion;
        productListEl.prepend(promotion)
    }

    if (dataObj.deliveryStatus) {
        deliveryStatus.textContent = dataObj.deliveryStatus;
        productListEl.append(deliveryStatus);
    }
}
