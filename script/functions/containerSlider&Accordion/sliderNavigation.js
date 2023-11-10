let btnIndex = 0;


function dotsNavigation() {
    const sliderDots = document.querySelectorAll('.dots__button');
    const slides = document.querySelectorAll('.slide');
    sliderDots.forEach(function(item, index) {
        item.onclick = function() {
            sliderDots.forEach(function(el) {
                el.classList.remove('dots__button_active')
            })
            sliderDots[index].classList.add('dots__button_active');
    
            slides.forEach(function(classDots){
                classDots.classList.remove('slide_active')
            })
    
            slides[index].classList.add('slide_active');
    
            btnIndex = index;  
        }
    })
}

function prevBtnNavigation() {
    const btnPrev = document.querySelector('.slider-buttons__button_prev');
    const sliderDots = document.querySelectorAll('.dots__button');
    const slides = document.querySelectorAll('.slide');
    btnPrev.onclick = function() {
        slides[btnIndex].classList.remove('slide_active');
        sliderDots[btnIndex].classList.remove('dots__button_active');
    
        btnIndex = (btnIndex - 1 + slides.length) % slides.length;
    
        slides[btnIndex].classList.add('slide_active');
        sliderDots[btnIndex].classList.add('dots__button_active');
    };
}

function NextBtnNavigation() {
    const btnNext = document.querySelector('.slider-buttons__button_next');
    const sliderDots = document.querySelectorAll('.dots__button');
    const slides = document.querySelectorAll('.slide');
    btnNext.onclick = function() {
        slides[btnIndex].classList.remove('slide_active');
        sliderDots[btnIndex].classList.remove('dots__button_active');
        
        btnIndex = (btnIndex + 1) % slides.length;
    
        slides[btnIndex].classList.add('slide_active');
        sliderDots[btnIndex].classList.add('dots__button_active');
    };
}
