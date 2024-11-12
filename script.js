const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");
const menuClose = document.getElementById('menu-close');

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    const expanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
});

menuClose.addEventListener('click', function () {
    navMenu.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
});