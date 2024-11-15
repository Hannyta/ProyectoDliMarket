const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuClose = document.getElementById('menu-close');
const navAccount = document.querySelector('.navlist-account');

// Función para verificar el tamaño de pantalla y actualizar el menú
const checkScreenSize = () => {
    if (window.innerWidth >= 1024) {
        // Pantallas grandes: mostrar menú como barra horizontal fija
        navMenu.classList.add("active");
        menuToggle.style.display = "none"; // Oculta botón hamburguesa
        menuClose.style.display = "none"; // Oculta botón de cierre
        if (navAccount) navAccount.style.display = "none"; // Oculta enlace "Mi cuenta"
    } else {
        // Pantallas pequeñas: activar menú desplegable
        navMenu.classList.remove("active");
        menuToggle.style.display = "block"; // Muestra botón hamburguesa
        if (navAccount) navAccount.style.display = "block"; // Muestra enlace "Mi cuenta"
    }
};

// Ejecutamos la función al cargar la página y al redimensionar la ventana
window.addEventListener("resize", checkScreenSize);
checkScreenSize();

// Funcionalidad del menú (hamburguesa)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const expanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
    if (expanded) {
        navMenu.querySelector('a').focus(); // Enfoca el primer enlace del menú
    }
});

// Swiper para el banner
let swiperBanner = new Swiper('.swiper-container', { 
    loop: true, 
    spaceBetween: 32,
    pagination: { 
        el: '.swiper-pagination', 
        clickable: true, 
    }, 
    navigation: { 
        nextEl: '.swiper-button-next', 
        prevEl: '.swiper-button-prev', 
    }, 
    autoplay: {
         delay: 2000,
         pauseOnMouseEnter: true,
    },
    slidesPerView: 1,
});