let lastScrollTop = 0;
const header = document.querySelector('header');

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        header.style.top = `-${header.offsetHeight}px`; 
    } else {
        header.style.top = '0';
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

/* popup-info */
document.querySelectorAll('.toggle-btn').forEach(button => {
    button.addEventListener('click', function() {
        const list = this.nextElementSibling;
        const buttonIcon = this.querySelector('.button-icon');
        
        // Переключаем видимость списка
        list.classList.toggle('show');
        
        // Меняем стрелочку
        if (list.classList.contains('show')) {
            buttonIcon.innerHTML = '&#8595;'; // Стрелка вниз
        } else {
            buttonIcon.innerHTML = '&#8593;'; // Стрелка вверх
        }
    });
});

