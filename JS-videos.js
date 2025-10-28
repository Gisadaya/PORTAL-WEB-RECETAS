
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


document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const links = document.querySelector('.links');
  const menu = document.getElementById('menu');
  const menuDesplegable = document.querySelector('.menu-desplegable');
  const menuDesplegableBtn = menuDesplegable ? menuDesplegable.querySelector('.menu-desplegableG') : null;
  const subMenu = menuDesplegable ? menuDesplegable.querySelector('.sub-menu') : null;

  
  if (menuToggle && links) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      links.classList.toggle('active');
      
      const expanded = links.classList.contains('active');
      menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    });
  }

 
  if (menuDesplegableBtn && menuDesplegable) {
    
    menuDesplegableBtn.addEventListener('click', (e) => {
     
      const isMobile = window.matchMedia('(max-width: 458px)').matches;
      if (isMobile) {
        e.preventDefault();
        e.stopPropagation();
        menuDesplegable.classList.toggle('open');
        const expanded = menuDesplegable.classList.contains('open');
        menuDesplegableBtn.setAttribute('aria-expanded', expanded ? 'true' : 'false');
      } else {
       
      }
    });
  }

  
  if (subMenu) {
    subMenu.addEventListener('click', (e) => {
      const target = e.target.closest('a');
      if (!target) return;
     
    });
  }

  // Cerrar menú si se hace click fuera (mejora UX)
  document.addEventListener('click', (e) => {
    const clickInsideLinks = e.target.closest('.links');
    if (!clickInsideLinks) {
      links.classList.remove('active');
      if (menuDesplegable) menuDesplegable.classList.remove('open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      if (menuDesplegableBtn) menuDesplegableBtn.setAttribute('aria-expanded', 'false');
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      links.classList.remove('active');
      if (menuDesplegable) menuDesplegable.classList.remove('open');
      if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
      if (menuDesplegableBtn) menuDesplegableBtn.setAttribute('aria-expanded', 'false');
    }
  });


  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 458px)').matches) {
      if (menuDesplegable) menuDesplegable.classList.remove('open');
      if (links) links.classList.remove('active');
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

