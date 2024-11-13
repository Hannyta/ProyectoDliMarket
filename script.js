let currentSlide = 0;

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuClose = document.getElementById('menu-close');

// Funcionalidad del menú (hamburguesa)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const expanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
});

menuClose.addEventListener('click', function () {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
});

const slides = document.querySelectorAll('.banner-container');
const totalSlides = slides.length;

const moveSlider = (direction) => {
    currentSlide += direction; // Aumentar o disminuir el índice de la diapositiva actual

    // Si el índice es menor que 0, volvemos a la última diapositiva
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1; // Volver a la última diapositiva
    } else if (currentSlide >= totalSlides) {
        currentSlide = 0; // Volver a la primera diapositiva
    }

    // Desplazamos el slider
    document.querySelector('.slider-container').style.transform = `translateX(-${currentSlide * 100}%)`;
};

// Asignar los eventos para los botones de navegación
document.querySelector('.slider-btn.prev').addEventListener('click', () => moveSlider(-1)); // Navegar hacia la izquierda
document.querySelector('.slider-btn.next').addEventListener('click', () => moveSlider(1));  // Navegar hacia la derecha

// Automatizar el cambio de diapositivas cada 5 segundos
setInterval(() => {
    moveSlider(1);  // Cambiar a la siguiente diapositiva cada 5 segundos
}, 5000);  // 5000 ms = 5 segundos