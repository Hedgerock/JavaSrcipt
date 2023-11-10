const sliderBlock = document.createElement('div');
const sliderSlides = document.createElement('div');
const dots = document.createElement('div');
const sliderBtns = document.createElement('div');
const sliderBtnPrev = document.createElement('button');
const sliderBtnNext = document.createElement('button');
const box = document.createElement('div');

sliderBlock.className = 'slider';
sliderSlides.className = 'slider-slides';
dots.className = 'dots';
sliderBtns.className = 'slider-buttons';

sliderBtnPrev.className = 'slider-buttons__button slider-buttons__button_prev';
sliderBtnPrev.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';

sliderBtnNext.className = 'slider-buttons__button slider-buttons__button_next';
sliderBtnNext.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';

box.className = 'box';

function initSlider(parentElSelector) {
    const parentEl = document.querySelector(parentElSelector);

    parentEl.append(sliderBlock, box);
    sliderBlock.append(sliderSlides, sliderSlides, dots, sliderBtns);
    sliderBtns.append(sliderBtnPrev, sliderBtnNext);
}