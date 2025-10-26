
  // ==== Carrusel desplazable manualmente ====
const carruseles = document.querySelectorAll('.carrusel');

carruseles.forEach(carrusel => {
  let isDown = false;
  let startX;
  let scrollLeft;

  carrusel.addEventListener('mousedown', (e) => {
    isDown = true;
    carrusel.classList.add('active');
    startX = e.pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
  });

  carrusel.addEventListener('mouseleave', () => {
    isDown = false;
    carrusel.classList.remove('active');
  });

  carrusel.addEventListener('mouseup', () => {
    isDown = false;
    carrusel.classList.remove('active');
  });

  carrusel.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 1.5; 
    carrusel.scrollLeft = scrollLeft - walk;
  });
});


// Botón hamburguesa
const toggle = document.querySelector(".menu-toggle");
const links = document.querySelector(".links ul");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  links.classList.toggle("active");
});

// Submenús en móviles (por toque)
document.querySelectorAll(".menu-desplegable > a").forEach(link => {
  link.addEventListener("click", (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      const parent = link.parentElement;
      parent.classList.toggle("active");
    }
  });
});


// === FUNCIONALIDAD DE BOTONES DE VIDEOS ===

// ❤️ Botón "Me gusta"
const botonesLike = document.querySelectorAll('.btn-like');
botonesLike.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('activo');
    const contador = btn.querySelector('.contador');
    let cantidad = parseInt(contador.textContent);

    if (btn.classList.contains('activo')) {
      contador.textContent = cantidad + 1;
    } else {
      contador.textContent = cantidad - 1;
    }
  });
});

// ⏰ Botón "Ver más tarde"
const botonesWatchLater = document.querySelectorAll('.btn-watchlater');
botonesWatchLater.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('activo');
    btn.innerHTML = btn.classList.contains('activo')
      ? '<i class="fas fa-check"></i> Agregado'
      : '<i class="fas fa-clock"></i> Ver más tarde';
  });
});

