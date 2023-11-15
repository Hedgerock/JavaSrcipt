let elementIsActive = false;

function slideCreator(parentElSelector, dataObj) {
    const parentEl = document.querySelector(parentElSelector);

    if(!parentEl) {
        console.warn(`${parentEl} not found`);
        return
    }

    const slide = document.createElement('a');
    const slideImg = document.createElement('div');
    const slideImgSmall = document.createElement('img');
    const slideImgBig = document.createElement('img');
    const slideContent = document.createElement('div');
    const slideContentTitle = document.createElement('h3');
    const slideContentText = document.createElement('p');
    const dotsBtn = document.createElement('button'); 

    if (!elementIsActive) {
        slide.className = 'slide slide_active';
        dotsBtn.className = 'dots__button dots__button_active';
    } else {
        slide.className = 'slide';
        dotsBtn.className = 'dots__button';
    }

    slide.setAttribute('href', `${dataObj.link}`);

    slideImg.className = 'slide__img';

    slideImgSmall.className = 'slide__image slide__image_small';
    slideImgSmall.setAttribute('src', dataObj.pictureSmall);
    slideImgSmall.setAttribute('alt', '');

    slideImgBig.className = 'slide__image slide__image_big';
    slideImgBig.setAttribute('src', dataObj.picture);
    slideImgBig.setAttribute('alt', '');

    slideContent.className = 'slide-content';

    slideContentTitle.className = 'slide-content__title';
    slideContentTitle.textContent = dataObj.title;

    slideContentText.className = 'slide-content__text';
    slideContentText.textContent = dataObj.text;

    parentEl.append(slide);
    slide.append(slideImg, slideContent);
    slideImg.append(slideImgSmall, slideImgBig);
    slideContent.append(slideContentTitle, slideContentText);
    dots.append(dotsBtn);

    elementIsActive = true;
}