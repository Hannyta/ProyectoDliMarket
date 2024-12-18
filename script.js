const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');
const menuClose = document.getElementById('menu-close');
const navAccount = document.querySelector('.navlist-account');
const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

if (!localStorage.getItem('ageVerified')) { 
    ageModal.style.display = 'block'; 
} else { 
    ageModal.style.display = 'none'; 
}

yesButton.addEventListener('click', () => { 
    document.getElementById('ageModal').style.display = 'none'; 
}); 

noButton.addEventListener('click', () => {
     alert('Debes ser mayor de edad para ingresar a este sitio.'); window.location.href = 'https://www.google.com'; 
});

// Función para verificar el tamaño de pantalla y actualizar el menú
const checkScreenSize = () => {
    if (window.innerWidth >= 1024) {
        
        navMenu.classList.add("active");
        menuToggle.style.display = "none"; 
        menuClose.style.display = "none";
        if (navAccount) navAccount.style.display = "none"; 
    } else {
        navMenu.classList.remove("active");
        menuToggle.style.display = "block";
        menuClose.style.display = "block";
        if (navAccount) navAccount.style.display = "block";
    }
};

window.addEventListener("resize", checkScreenSize);
checkScreenSize();

// Funcionalidad del menú (hamburguesa)
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const expanded = navMenu.classList.contains("active");
    menuToggle.setAttribute("aria-expanded", expanded);
    if (expanded) {
        navMenu.querySelector('a').focus();
    }
});

menuClose.addEventListener('click', () => {
    navMenu.classList.remove("active"); // Cierra el menú
    menuToggle.setAttribute("aria-expanded", "false"); // Actualiza el estado de expansión
});

// Swiper para el banner
let swiperBanner = new Swiper('.swiper-container', { 
    loop: true, 
    spaceBetween: 32,
    pagination: { 
        el: '.swiper-pagination', 
        clickable: true,
        dynamicBullets: true,
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

const $form = document.querySelector('#form')

$form.addEventListener('submit', async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(this);
    console.log("Datos enviados:", Object.fromEntries(form)); // Muestra los datos en consola
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            "Accept": "application/json",
        },
    });

    if (response.ok) {
        this.reset();
        alert("Gracias por contactarnos, en breve atenderemos su mensaje.");
    } else {
        alert("Hubo un problema al enviar el formulario, intenta nuevamente.");
    }
});


const cart = [
    { id: 1, name: "Producto A", price: 100, quantity: 1 },
    { id: 2, name: "Producto B", price: 200, quantity: 2 },
  ];

  function renderCart() {
    const cartItems = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
      total += item.price * item.quantity;
      cartItems.innerHTML += `
        <li>
          ${item.name} - $${item.price} x ${item.quantity}
          <button onclick="removeItem(${item.id})">Eliminar</button>
        </li>
      `;
    });

    cartTotal.innerText = total.toFixed(2);
  }

  function removeItem(id) {
    const index = cart.findIndex((item) => item.id === id);
    if (index !== -1) {
      cart.splice(index, 1);
      renderCart();
    }
  }

  renderCart();