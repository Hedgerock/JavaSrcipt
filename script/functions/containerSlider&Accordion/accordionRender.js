function boxItemRender(parentEl, dataObj) {
    const boxItem = document.createElement('div');
    const accordionBtn = document.createElement('button');
    const accordionBtnIcon = document.createElement('i');
    const boxItemTitle = document.createElement('h2');
    const accordionBlock = document.createElement('div');
    const accordionBlockTitle = document.createElement('h2');
    const accordionContainerFlex = document.createElement('div');
    const accordionBlockImg = document.createElement('div');
    const accordionBlockImgPicture = document.createElement('img');
    const accordionBlockText = document.createElement('div');
    const accordionBlockLink = document.createElement('a');

    boxItem.className = 'box-item';

    accordionBtn.className = 'accordion-button';
    accordionBtnIcon.className = 'fa-solid fa-plus';

    boxItemTitle.className = 'box-item__title'
    boxItemTitle.textContent = dataObj.title;

    accordionBlock.className = 'accordion-block';
    accordionBlockTitle.className = 'accordion-block__title';
    accordionBlockText.className = 'accordion-block__text';

    accordionBlockTitle.textContent = 'Promo';
    accordionBlockText.textContent = dataObj.text;

    accordionContainerFlex.className = 'accordion-block-container-flex';

    accordionBlockImg.className = 'accordion-block-img';
    accordionBlockImgPicture.className = 'accordion-block-img__picture';
    accordionBlockImgPicture.setAttribute('src', dataObj.src);
    accordionBlockImgPicture.setAttribute('alt', '');

    accordionBlockLink.className = 'accordion-block__link';
    accordionBlockLink.setAttribute('href', dataObj.link);
    accordionBlockLink.textContent = 'Перейти к списку товаров';

    parentEl.append(boxItem);
    boxItem.append(accordionBtn, boxItemTitle, accordionBlock);
    accordionBtn.append(accordionBtnIcon);
    accordionBlock.append(accordionBlockTitle, accordionContainerFlex, accordionBlockLink);
    accordionContainerFlex.append(accordionBlockImg, accordionBlockText);
    accordionBlockImg.append(accordionBlockImgPicture);
}