//burger menu
document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const burgerMenu = document.querySelector('.burger-menu');
    const overlay = document.querySelector('.overlay');
    const body = document.body;

    menuButton.addEventListener('click', (e) => {
        e.preventDefault();
        menuButton.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        overlay.classList.toggle('active');
        body.classList.toggle('locked');
    });

// background overlay
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !menuButton.contains(e.target)) {
            menuButton.classList.remove('active');
            burgerMenu.classList.remove('active');
            overlay.classList.remove('active');
            body.classList.remove('locked');
        }
    });
});

//silder
document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.testimonials-wrapper', {
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
        loop: false,
    });
});