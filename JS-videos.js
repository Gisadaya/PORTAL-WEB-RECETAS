const carruseles = document.querySelectorAll('.carrusel');

// Velocidad de desplazamiento (en píxeles por intervalo)
const velocidad = 2;

// Intervalo de tiempo (en milisegundos)
const intervalo = 20;

// Recorre cada carrusel y aplica el desplazamiento automático
carruseles.forEach(carrusel => {
  let desplazamiento = 0;

  function moverCarrusel() {
    carrusel.scrollLeft += velocidad;
    desplazamiento += velocidad;

    // Si llega al final del carrusel, vuelve al inicio
    if (carrusel.scrollLeft + carrusel.clientWidth >= carrusel.scrollWidth) {
      carrusel.scrollLeft = 0;
      desplazamiento = 0;
    }
  }

  // Ejecuta el desplazamiento automático cada cierto tiempo
  setInterval(moverCarrusel, intervalo);
});


// === Carrusel automático de videos ===

// Función para mover un carrusel automáticamente
function iniciarCarrusel(idCarrusel) {
  const carrusel = document.getElementById(idCarrusel);
  let desplazamiento = 0;

  function mover() {
    // Mueve el carrusel suavemente hacia la derecha
    desplazamiento += 1;
    carrusel.scrollTo({
      left: desplazamiento,
      behavior: "smooth"
    });

    // Si llega al final, regresa al inicio
    if (desplazamiento >= carrusel.scrollWidth - carrusel.clientWidth) {
      desplazamiento = 0;
    }
  }

  // Mueve el carrusel cada 40 milisegundos (ajustable)
  setInterval(mover, 40);
}

// Iniciar los tres carruseles
window.addEventListener("load", () => {
  iniciarCarrusel("carrusel-platillos");
  iniciarCarrusel("carrusel-postres");
  iniciarCarrusel("carrusel-bebidas");
});
