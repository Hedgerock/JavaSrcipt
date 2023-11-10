function accordionFunc() {
    const accordionButton = document.querySelectorAll('.accordion-button');
    const accordionBlock = document.querySelectorAll('.accordion-block')

    accordionButton.forEach(function(item, index) {

        item.onclick = function() {
            if (item.className.includes('accordion-button_active')) {
    
                item.classList.remove('accordion-button_active');
                item.innerHTML = '<i class="fa-solid fa-plus"></i>';
                accordionBlock[index].classList.remove('accordion-block_visible');
    
                return;
            }
    
            accordionBlock.forEach(function (el) {
                el.classList.remove('accordion-block_visible');
            })
    
            accordionButton.forEach(function(btn) {
                btn.classList.remove('accordion-button_active');
                btn.innerHTML = '<i class="fa-solid fa-plus"></i>'
            })
    
    
            item.innerHTML = '<i class="fa-solid fa-minus"></i>';
            accordionBlock[index].classList.add('accordion-block_visible');
            item.classList.add('accordion-button_active')
        }
    });
}