let currentSlide = 0;

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuClose = document.getElementById('menu-close');

// Funcionalidad del menú (hamburguesa)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const expanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
    if (expanded) {
        navMenu.querySelector('a').focus();
    }
});

menuClose.addEventListener('click', function () {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
});

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
    }
});

var swiper = new Swiper('.swiper-container', { 
    loop: true, 
    pagination: { 
        el: '.swiper-pagination', 
        clickable: true, 
    }, 
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    }, 
    autoplay: {
         delay: 5000,
        },
        centeredSlides: true,
        slidesPerView: 1,
    });