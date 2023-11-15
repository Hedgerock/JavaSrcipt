const sliderBlock = document.createElement('div');
const sliderSlides = document.createElement('div');
const dots = document.createElement('div');
const sliderBtns = document.createElement('div');
const sliderBtnPrev = document.createElement('button');
const sliderBtnPrevIcon = document.createElement('i');
const sliderBtnNext = document.createElement('button');
const sliderBtnNextIcon = document.createElement('i');
const box = document.createElement('div');

sliderBlock.className = 'slider';
sliderSlides.className = 'slider-slides';
dots.className = 'dots';
sliderBtns.className = 'slider-buttons';

sliderBtnPrev.className = 'slider-buttons__button slider-buttons__button_prev';
sliderBtnPrevIcon.className = 'fa-solid fa-chevron-left';

sliderBtnNext.className = 'slider-buttons__button slider-buttons__button_next';
sliderBtnNextIcon.className = 'fa-solid fa-chevron-right';

box.className = 'box';

function initSlider(parentElSelector) {
    const parentEl = document.querySelector(parentElSelector);

    parentEl.append(sliderBlock, box);
    sliderBlock.append(sliderSlides, sliderSlides, dots, sliderBtns);
    sliderBtns.append(sliderBtnPrev, sliderBtnNext);
    sliderBtnPrev.append(sliderBtnPrevIcon);
    sliderBtnNext.append(sliderBtnNextIcon);
}