let elementIsActive = false;

function slideCreator(parentElSelector, dataObj) {
    const parentEl = document.querySelector(parentElSelector);

    if(!parentEl) {
        console.warn(`${parentEl} not found`);
        return
    }

    const slide = document.createElement('a');
    const slideImg = document.createElement('div');
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
    slideImg.innerHTML = `
    <img class="slide__image slide__image_small" src=${dataObj.pictureSmall} alt="">
    <img class="slide__image slide__image_big" src=${dataObj.picture} alt="">
    `

    slideContent.className = 'slide-content';

    slideContentTitle.className = 'slide-content__title';
    slideContentTitle.innerHTML = dataObj.title;

    slideContentText.className = 'slide-content__text';
    slideContentText.innerHTML = dataObj.text;

    parentEl.append(slide);
    slide.append(slideImg, slideContent);
    slideContent.append(slideContentTitle, slideContentText);
    dots.append(dotsBtn);

    elementIsActive = true;
}