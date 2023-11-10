function boxItemRender(parentEl, dataObj) {
    const boxItem = document.createElement('div');
    const accordionBtn = document.createElement('button');
    const boxItemTitle = document.createElement('h2');
    const accordionBlock = document.createElement('div');
    const accordionBlockTitle = document.createElement('h2');
    const accordionBlockText = document.createElement('div');

    boxItem.className = 'box-item';

    accordionBtn.className = 'accordion-button';
    accordionBtn.innerHTML = '<i class="fa-solid fa-plus"></i>'

    boxItemTitle.className = 'box-item__title'
    boxItemTitle.innerHTML = 'ACCORDION';

    accordionBlock.className = 'accordion-block';
    accordionBlockTitle.className = 'accordion-block__title';
    accordionBlockText.className = 'accordion-block__text';

    accordionBlockTitle.innerHTML = dataObj.title;
    accordionBlockText.innerHTML = dataObj.text;

    parentEl.append(boxItem);
    boxItem.append(accordionBtn, boxItemTitle, accordionBlock);
    accordionBlock.append(accordionBlockTitle, accordionBlockText)
}