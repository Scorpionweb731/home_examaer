

document.querySelectorAll('.product_item').forEach((item) => {
    const modalTriggerBtn = item.querySelector('.modalTriggerBtn');
    // const product_item_pTag =  item.querySelector('p');
    
    item.addEventListener('mouseover', () => {
        item.classList.add('hovered');
        if (modalTriggerBtn) {
            // product_item_pTag.style.visibility = 'visible';
            modalTriggerBtn.classList.add('animated');
        }
    });

    item.addEventListener('mouseout', () => {
        item.classList.remove('hovered');
        if (modalTriggerBtn) {
            // product_item_pTag.style.visibility = 'hidden';
            modalTriggerBtn.classList.remove('animated');
        }
    });
});
