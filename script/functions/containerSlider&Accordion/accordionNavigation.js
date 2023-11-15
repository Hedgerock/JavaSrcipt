function accordionFunc() {
    const accordionButton = document.querySelectorAll('.accordion-button');
    const accordionBlock = document.querySelectorAll('.accordion-block')

    accordionButton.forEach(function(item, index) {
        item.onclick = function() {
            const itemIcon = item.querySelector('i');
            if (item.className.includes('accordion-button_active')) {
    
                item.classList.remove('accordion-button_active');
                itemIcon.className = 'fa-solid fa-plus';
                accordionBlock[index].classList.remove('accordion-block_visible');
    
                return;
            }
    
            accordionBlock.forEach(function (el) {
                el.classList.remove('accordion-block_visible');
            })
    
            accordionButton.forEach(function(btn) {
                const btnIcon = btn.querySelector('i');
                btn.classList.remove('accordion-button_active');
                if (btn !== item) {
                    btnIcon.className = 'fa-solid fa-plus';
                }
            })
    
            itemIcon.className = 'fa-solid fa-minus';
            accordionBlock[index].classList.add('accordion-block_visible');
            item.classList.add('accordion-button_active')
        }
    });
}
