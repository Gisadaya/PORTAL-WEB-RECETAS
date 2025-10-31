let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    const slides = document.getElementsByClassName("carousel-slide");
    

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Vuelve al inicio
    }
    
    
    slides[slideIndex - 1].style.display = "block";
    
    
    setTimeout(showSlides, 4000); 
}


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

// ===== BUSCADOR DE RECETAS =====
function buscarReceta() {
  const input = document.getElementById("input-busqueda").value.toLowerCase().trim();
  const recetas = document.querySelectorAll(".receta .contenido");
  let encontrada = false;

  recetas.forEach(receta => {
    const titulo = receta.querySelector("h3").textContent.toLowerCase();

    if (titulo.includes(input) && input !== "") {
      receta.scrollIntoView({ behavior: "smooth", block: "center" });
      receta.style.boxShadow = "0 0 20px gold";
      receta.style.transition = "box-shadow 0.5s ease";
      setTimeout(() => receta.style.boxShadow = "", 2500);
      encontrada = true;
    }
  });

  if (!encontrada && input !== "") {
    alert("No se encontró ninguna receta con ese nombre.");
  }
}

/*MODAL 1 RECETA HORCHATA*/
function Abrirmodal(recetaId) {
  const modal = document.querySelector('.modal');
  const titulo = document.querySelector('.titulo-receta');
  const cuerpo = document.querySelector('.receta-info');

  if (recetaId === 'receta-horchata') {
    titulo.textContent = 'Receta de horchata Salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>500g de arroz blanco</li>
          <li>400 mililitros de leche</li>
          <li>1 litro de agua</li>
          <li>2 ramas de canela</li>
          <li>200g de azúcar </li>
          <li>2 cucharadas de vainilla liquida</li>
          <li>Canela en polvo</li>
        </ul>

        <img src="imagenes/Horchata.jpg" alt="Horchata" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>En un recipiente hondo, se coloca el arroz junto con la canela y suficiente agua para remojarlo
          durante aproximadamente 2 a 3 horas.</li>
          <li><b>Paso 2:</b>Una vez transcurrido este tiempo, se tritura el arroz con la canela hasta obtener una onsistencia
          final.</li>
          <li><b>Paso 3:</b>Después, se pasa la pasta por un colador, presinando vigorosamente para
          extraer la mayor cantidad de líquido posible.</li>
          <li><b>Paso 4:</b>A la mezcla resultante se le añaden 2 cucharadas de vainilla liquida y los 200g d azúcar
          removiendo hasta que se disuelva completamente.</li>
          <li><b>Paso 5:</b>Luego se incorporan los 400 mililitros de leche y se mezcla nuevamente.</li>
          <li><b>Paso 6:</b>La preparación se refrigera antes de degustarla, pudiendo añadirse canela en
          polvo al servir si se desea..</li>
        </ul>
      </div>
    `;
      

  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  // Mostrar modal
  modal.style.display = 'block';
}

// ======== FUNCIÓN PARA CERRAR EL MODAL ========
function cerrarmodal() {
  const modal = document.querySelector('.modal');
  modal.style.display = 'none';
}

// Cerrar con la “X”
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn = document.querySelector('.cerrar');
  if (cerrarBtn) {
    cerrarBtn.addEventListener('click', cerrarmodal);
  }
});

// Cerrar al hacer clic fuera del modal
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL SEA MÓVIL ========
const modalContenido = document.querySelector('.modal-contenido');
let isDragging = false;
let offsetX, offsetY;

modalContenido.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - modalContenido.offsetLeft;
  offsetY = e.clientY - modalContenido.offsetTop;
  modalContenido.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging = false;
  modalContenido.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging) {
    modalContenido.style.left = `${e.clientX - offsetX}px`;
    modalContenido.style.top = `${e.clientY - offsetY}px`;
    modalContenido.style.position = 'absolute';
  }
});



/*MODAL RECETA 2 ATOL DE ELOTE*/
function Abrirmodal2(recetaId) {
  const modal = document.querySelector('.modal2');
  const titulo = document.querySelector('.titulo-receta2');
  const cuerpo = document.querySelector('.receta-info2');

  
  if (recetaId === 'receta-atol de elote') {
    titulo.textContent = 'Receta de atol de elote Salvadoreño';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 elotes o los que desee</li>
          <li>1 y 1/2 taza de agua</li>
          <li>1 taza de leche descremada</li>
          <li>2 y 1/2 cucharadas de azúcar</li>
          <li>1/2 cucharada de sal</li>
          <li>2 cucharadas de maicena</li>
          <li>3 cucharadas de agua fría</li>
          <li>2 ramitas de canela</li>
          <li>Canela en polvo</li>
        </ul>

        <img src="imagenes/atol de elote.jpg" alt="Atol de elote" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>Desgranamos los elotes y los ponemos en la licuadora ju nto con las 2 tazas y media de agua.</li>
          <li><b>Paso 2:</b>Licuamos bien hasta que quede lo mas triturado posible, Una vez triturados, en una ollita y con la ayuda
          de un colador, colocamos la mezcla obtenida y nos deshacemos de las cascarillas sobrantes.</li>
          <li><b>Paso 3:</b>Mientras hacemos esto, ponemos la taza de leche a calentar en otra ollita, unos 4 minutos aproximadamente
          hasta que este caliente.</li>
          <li><b>Paso 4:</b>En un vaso ponemos las 2 cucharadas de maicena con las 3 cucharadas de agua fria, removemos hasta que la maicena se 
          disuelva completamente y reservamos.</li>
          <li><b>Paso 5:</b>La ponemos a calentar a fuego bajo, le añadimos la leche y no hayq ue dejar de remover por ningun momento para que no se nos
          corte el atol.</li>
          <li><b>Paso 6:</b>Añadimso el azúcar, la sal, las ramas de canela y por último la maicena que teníamos reservada.</li>
          <li><b>Paso 7:</b>Seguimos removiendo constantemente hasta que hierva y espese el atol, una vez espeso, retiramos del fuego y
          ya esta listo para servir.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }


  modal.style.display = 'block';
}


function cerrarmodal2() {
  const modal = document.querySelector('.modal2');
  modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn2 = document.querySelector('.cerrar2');
  if (cerrarBtn2) {
    cerrarBtn2.addEventListener('click', cerrarmodal2);
  }
});


window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal2');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


const modalContenido2 = document.querySelector('.modal-contenido2');
let isDragging2 = false;
let offsetX2, offsetY2;

modalContenido2.addEventListener('mousedown', (e) => {
  isDragging2 = true;
  offsetX2 = e.clientX - modalContenido2.offsetLeft;
  offsetY2 = e.clientY - modalContenido2.offsetTop;
  modalContenido2.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging2 = false;
  modalContenido2.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging2) {
    modalContenido2.style.left = `${e.clientX - offsetX2}px`;
    modalContenido2.style.top = `${e.clientY - offsetY2}px`;
    modalContenido2.style.position = 'absolute';
  }
});



/*MODAL RECETA 3 FRESCO DE ENSALADA*/
function Abrirmodal3(recetaId) {
  const modal = document.querySelector('.modal3');
  const titulo = document.querySelector('.titulo-receta3');
  const cuerpo = document.querySelector('.receta-info3');

  
  if (recetaId === 'receta-fresco de ensalada') {
    titulo.textContent = 'Receta fresco de ensalada';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>4 tazas de piña finamente picada, divididas</li>
          <li>1 taza de azúcar morena bien compacta</li>
          <li>2 tazas de mamey fresco finamente picado o pulpa de mamey congelada</li>
          <li>Una bolsa de 14 oz. de jocotes enteros congelados, sin hueso y picados finamente</li>
          <li>8 oz. de marañón, sin las puntas y picado finamente</li>
          <li>1 manzana Pink Lady mediana, sin corazón y picada finamente</li>
          <li>1 mango grande maduro, pelado, sin hueso y picado finamente</li>
          <li>1 cucharadita de esencia o extracto de piña (opcional)</li>
           <li>3 hojas medianas de lechuga romana, cortadas en rodajas finas</li>
          <li>Ramitas de berros para decorar</li>
        </ul>

        <img src="imagenes/Fresco de ensalada.jpg" alt="Fresco de ensalada" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>En una licuadora, añade 3 tazas de piña, el azúcar moreno y 2 tazas de agua.
           Licúa a alta velocidad hasta obtener una mezcla suave, de 1 a 2 minutos.</li>
          <li><b>Paso 2:</b>Transfiera a una jarra grande o dispensador de bebidas. Incorpore el mamey, los jocotes, el marañón, 
          la manzana, el mango, la esencia de piña (si lo desea), la piña restante y 14 tazas de agua</li>
          <li><b>Paso 3:</b>Incorpore la lechuga y reserve (si es posible en el refrigerador) durante 10 minutos para que los sabores se integren.</li>
          <li><b>Paso 4:</b>Para servir, llene aproximadamente un tercio de cada vaso con fruta y luego añada el líquido. Decore con berros 
          y sirva con pajitas y cucharas para sacar la fruta.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  // Mostrar modal 3
  modal.style.display = 'block';
}

// ======== FUNCIÓN PARA CERRAR EL MODAL 3 ========
function cerrarmodal3() {
  const modal = document.querySelector('.modal3');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 3
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn3 = document.querySelector('.cerrar3');
  if (cerrarBtn3) {
    cerrarBtn3.addEventListener('click', cerrarmodal3);
  }
});

// Cerrar al hacer clic fuera del modal 3
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal3');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 3 SEA MÓVIL ========
const modalContenido3 = document.querySelector('.modal-contenido3');
let isDragging3 = false;
let offsetX3, offsetY3;

modalContenido3.addEventListener('mousedown', (e) => {
  isDragging3 = true;
  offsetX3 = e.clientX - modalContenido3.offsetLeft;
  offsetY3 = e.clientY - modalContenido3.offsetTop;
  modalContenido3.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging3 = false;
  modalContenido3.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging3) {
    modalContenido3.style.left = `${e.clientX - offsetX3}px`;
    modalContenido3.style.top = `${e.clientY - offsetY3}px`;
    modalContenido3.style.position = 'absolute';
  }
});


/*MODAL RECETA 4 FRESCO DE JAMAICA*/
function Abrirmodal4(recetaId) {
  const modal = document.querySelector('.modal4');
  const titulo = document.querySelector('.titulo-receta4');
  const cuerpo = document.querySelector('.receta-info4');

  
  if (recetaId === 'receta-fresco de jamaica') {
    titulo.textContent = 'Receta de fresco de jamaica';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>½ taza de Flores secas de jamaica</li>
          <li>8 tazas de Agua</li>
          <li>1 taza de Azúcar</li>
        </ul>

        <img src="imagenes/Jamaica.jpg" alt="Fresco de jamaica" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
         <li><b>Paso 1:</b> En una olla, se pone a hervir la mitad del agua..</li>
          <li><b>Paso 2:</b> Una vez que el agua esté hirviendo, se añade la flor seca de Jamaica y media taza de azúcar.</li>
          <li><b>Paso 3:</b> Se mezcla hasta que el azúcar se disuelva por completo.</li>
          <li><b>Paso 4:</b> Se deja hervir por dos minutos y se apaga el fuego.</li>
          <li><b>Paso 5:</b> La olla se tapa y se deja reposar por aproximadamente diez minutos.</li>
          <li><b>Paso 6:</b> Transcurrido ese tiempo, se cuela la mezcla en el recipiente donde se preparará el fresco.</li>
          <li><b>Paso 7:</b> Se agrega el agua restante y se revisa el nivel de azúcar, añadiendo más si es necesario.</li>
          <li><b>Paso 8:</b> Finalmente, se sirve en un vaso con hielo para disfrutar.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  
  modal.style.display = 'block';
}


function cerrarmodal4() {
  const modal = document.querySelector('.modal4');
  modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn4 = document.querySelector('.cerrar4');
  if (cerrarBtn4) {
    cerrarBtn4.addEventListener('click', cerrarmodal4);
  }
});


window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal4');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


const modalContenido4 = document.querySelector('.modal-contenido4');
let isDragging4 = false;
let offsetX4, offset4;

modalContenido2.addEventListener('mousedown', (e) => {
  isDragging4 = true;
  offsetX4 = e.clientX - modalContenido4.offsetLeft;
  offsetY4 = e.clientY - modalContenido4.offsetTop;
  modalContenido4.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging4 = false;
  modalContenido4.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging4) {
    modalContenido4.style.left = `${e.clientX - offsetX4}px`;
    modalContenido4.style.top = `${e.clientY - offsetY4}px`;
    modalContenido4.style.position = 'absolute';
  }
});



/*MODAL RECETA 5 FRESCO DE TAMARINDO*/
function Abrirmodal5(recetaId) {
  const modal = document.querySelector('.modal5');
  const titulo = document.querySelector('.titulo-receta5');
  const cuerpo = document.querySelector('.receta-info5');

  if (recetaId === 'receta-fresco de tamarindo') {
    titulo.textContent = 'Receta de fresco de tamarindo';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>½ libra de Tamarindo</li>
          <li>2 litros de Agua hirviendo</li>
          <li>Azúcar</li>
          <li>1 pizca de Sal</li>
        </ul>

        <img src="imagenes/Fresco Tamarindo.jpg" alt="Fresco tamarindo" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Los tamarindos deben ser pelados y lavados adecuadamente antes de ser remojados en agua hervida, 
          con el fuego apagado, durante aproximadamente una hora.</li>
          <li><b>Paso 2:</b> Luego, se deben mover para extraer toda la pulpa, la cual se mezcla con el agua y se cuela
           presionando para obtener su jugo y sabor.</li>
          <li><b>Paso 3:</b> Posteriormente, se le añade azúcar al gusto y una pizca de sal.</li>
          <li><b>Paso 4:</b> Finalmente, se lleva al refrigerador y estará listo para ser servido.</li>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  
  modal.style.display = 'block';
}


function cerrarmodal5() {
  const modal = document.querySelector('.modal5');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 5
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn5 = document.querySelector('.cerrar5');
  if (cerrarBtn5) {
    cerrarBtn5.addEventListener('click', cerrarmodal5);
  }
});

// Cerrar al hacer clic fuera del modal 5
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal5');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 5 SEA MÓVIL ========
const modalContenido5 = document.querySelector('.modal-contenido5');
let isDragging5 = false;
let offsetX5, offsetY5;

modalContenido5.addEventListener('mousedown', (e) => {
  isDragging5 = true;
  offsetX5 = e.clientX - modalContenido5.offsetLeft;
  offsetY5 = e.clientY - modalContenido5.offsetTop;
  modalContenido5.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging5 = false;
  modalContenido5.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging5) {
    modalContenido5.style.left = `${e.clientX - offsetX5}px`;
    modalContenido5.style.top = `${e.clientY - offsetY5}px`;
    modalContenido5.style.position = 'absolute';
  }
});


/*MODAL RECETA 6 CEBADA*/
function Abrirmodal6(recetaId) {
  const modal = document.querySelector('.modal6');
  const titulo = document.querySelector('.titulo-receta6');
  const cuerpo = document.querySelector('.receta-info6');

  if (recetaId === 'receta-cebada') {
    titulo.textContent = 'Receta de cebada salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 l de agua</li>
          <li>1 rama de canela</li>
          <li>5 bayas de pimienta de Jamaica</li>
          <li>5 clavos</li>
           <li>30 g de harina de uso general o harina de arroz , diluida en 250 ml de agua</li>
          <li>2 cucharadas de extracto de vainilla</li>
          <li>3 cucharadas de esencia de fresa</li>
          <li>Azúcar, al gusto</li>
        </ul>

        <img src="imagenes/Cebada.jpg" alt="Cebada" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          li><b>Paso 1:</b>	En una cacerola antiadherente, hierva el agua, la canela, la pimienta de Jamaica y el clavo de olor durante 10 minutos.</li>
          <li><b>Paso 2:</b>	A continuación, agregue la harina disuelta en 250 ml de agua y cocine a fuego medio, batiendo constantemente durante 5 minutos.</li>
          <li><b>Paso 3:</b>	A continuación, agregue el extracto de vainilla, la esencia de fresa y el azúcar al gusto.</li>
          <li><b>Paso 4:</b>	Vierta la mezcla resultante en una licuadora y mezcle durante 1 minuto. Si la bebida está demasiado espesa,
           agregue un poco de agua y licue nuevamente durante unos segundos.</li>
           <li><b>Paso 5:</b>	Refrigere durante 3 o 4 horas antes de servir con o sin hielo picado.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  /*MUESTRA EL MODAL*/
  modal.style.display = 'block';
}

/*FUNCIÓN PARA CERRAR EL MODAL*/
function cerrarmodal6() {
  const modal = document.querySelector('.modal6');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn6 = document.querySelector('.cerrar6');
  if (cerrarBtn6) {
    cerrarBtn6.addEventListener('click', cerrarmodal6);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal6');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido6 = document.querySelector('.modal-contenido6');
let isDragging6 = false;
let offsetX6, offsetY6;

modalContenido5.addEventListener('mousedown', (e) => {
  isDragging6 = true;
  offsetX6 = e.clientX - modalContenido6.offsetLeft;
  offsetY6 = e.clientY - modalContenido6.offsetTop;
  modalContenido6.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging6 = false;
  modalContenido5.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging6) {
    modalContenido6.style.left = `${e.clientX - offsetX6}px`;
    modalContenido6.style.top = `${e.clientY - offsetY6}px`;
    modalContenido6.style.position = 'absolute';
  }
});



/*MODAL RECETA 7 FRESCO DE MARACUYA*/
function Abrirmodal7(recetaId) {
  const modal = document.querySelector('.modal7');
  const titulo = document.querySelector('.titulo-receta7');
  const cuerpo = document.querySelector('.receta-info7');

  if (recetaId === 'receta-fresco de maracuya') {
    titulo.textContent = 'Receta de fresco de maracuya';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>6 Maracuyas</li>
          <li>Azúcar</li>
          <li>1 pizca de Sal</li>
        </ul>

        <img src="imagenes/Maracuya.jpg" alt="Fresco maracuya" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ol>
          <li><b>Paso 1:</b> Para realizar esta receta, se deben extraer las semillas junto con la pulpa de cada fruto.</li>
          <li><b>Paso 2:</b> Después, se agrega un poco de azúcar y una pizca de sal, y se deja reposar la mezcla por hora y media.</li>
          <li><b>Paso 3:</b> Posteriormente, se agrega más agua y se rectifica el sabor, agregando más azúcar si es necesario.</li>
          <li><b>Paso 4:</b> La preparación está lista para servir.</li>
        </ol>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  /*MUESTRA EL MODAL*/
  modal.style.display = 'block';
}

/*FUNCIÓN PARA CERRAR EL MODAL*/
function cerrarmodal7() {
  const modal = document.querySelector('.modal7');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn7 = document.querySelector('.cerrar7');
  if (cerrarBtn7) {
    cerrarBtn7.addEventListener('click', cerrarmodal7);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal7');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido7 = document.querySelector('.modal-contenido7');
let isDragging7 = false;
let offsetX7, offsetY7;

modalContenido7.addEventListener('mousedown', (e) => {
  isDragging7 = true;
  offsetX7 = e.clientX - modalContenido7.offsetLeft;
  offsetY7 = e.clientY - modalContenido7.offsetTop;
  modalContenido7.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging7 = false;
  modalContenido7.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging7) {
    modalContenido7.style.left = `${e.clientX - offsetX7}px`;
    modalContenido7.style.top = `${e.clientY - offsetY7}px`;
    modalContenido7.style.position = 'absolute';
  }
});


/*MODAL RECETA 8 FRESCO DE CHAN*/
function Abrirmodal8(recetaId) {
  const modal = document.querySelector('.modal8');
  const titulo = document.querySelector('.titulo-receta8');
  const cuerpo = document.querySelector('.receta-info8');

  if (recetaId === 'receta-fresco de chan') {
    titulo.textContent = 'Receta de fresco de chan';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>4 cucharadas chía</li>
          <li>2-3 limones</li>
          <li>al gusto azúcar</li>
          <li>al gusto esencia de fresa (extracto de frambuesa)</li>
           <li>c/n agua</li>
        </ul>

        <img src="imagenes/Chan (2).jpg" alt="Fresco chan" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
           <li><b>Paso 1:</b>	Primero pondremos a remojar la chía con suficiente
            agua (unas 2 tazas de agua) por 1 hora o 1 hora y media para que se hidraten las semillas.</li>
          <li><b>Paso 2:</b> En un pichel vamos a hacer una limonada a 
          nuestro gusto pero que quede más dulce de lo habitual.</li>
          <li><b>Paso 3:</b> Luego de tener nuestra limonada a nuestro gusto vamos 
          agregar el extracto o esencia de fresa (no mucho) porque esta ayudara a dar
           el color y un sabor diferente a la limonada  y seguido ya la chía bien hidratada 
           (por 1 hora) la agregamos a nuestra limonada.</li>
          <li><b>Paso 4:</b> Mezclamos y probamos y rectificamos lo dulce a nuestro gusto y 
          listo se mete a la refrigeradora o se le agrega hielo </li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  /*MUESTRA EL MODAL*/
  modal.style.display = 'block';
}

/*FUNCIÓN PARA CERRAR EL MODAL*/
function cerrarmodal8() {
  const modal = document.querySelector('.modal8');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn8 = document.querySelector('.cerrar8');;
  if (cerrarBtn8) {
    cerrarBtn8.addEventListener('click', cerrarmodal8);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal8');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido8 = document.querySelector('.modal-contenido8');
let isDragging8 = false;
let offsetX8, offsetY8;

modalContenido8.addEventListener('mousedown', (e) => {
  isDragging8 = true;
  offsetX8 = e.clientX - modalContenido8.offsetLeft;
  offsetY8 = e.clientY - modalContenido8.offsetTop;
  modalContenido8.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging8 = false;
  modalContenido8.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging8) {
    modalContenido8.style.left = `${e.clientX - offsetX8}px`;
    modalContenido8.style.top = `${e.clientY - offsetY8}px`;
    modalContenido8.style.position = 'absolute';
  }
});


/*MODAL RECETA 9 ATOL DE MAÍZ TOSTADO*/
function Abrirmodal9(recetaId) {
  const modal = document.querySelector('.modal9');
  const titulo = document.querySelector('.titulo-receta9');
  const cuerpo = document.querySelector('.receta-info9');

  if (recetaId === 'receta-atol de maíz tostado') {
    titulo.textContent = 'Receta de atol de maíz tostado';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 litro Leche (En polvo o Líquida)</li>
          <li>1/3 de taza Maíz tostado</li>
          <li>Al gusto Azúcar</li>
          <li>Canela</li>
        </ul>

        <img src="imagenes/Atol de maíz tostado.jpg" alt="Maíz tostado" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Mezcla la leche con el maíz tostado y el azúcar.</li>
          <li><b>Paso 2:</b> Licúa todos los ingredientes.</li>
          <li><b>Paso 3:</b> Luego de licuar se coloca en una olla agrega canela y remueve
           constantemente para que este no se pegue, hasta que este hierva.</li>
           <li><b>Paso 4:</b> Y en minutos obtendrás una rica taza de atol de maíz tostado.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  /*MUESTRA EL MODAL*/
  modal.style.display = 'block';
}

/*FUNCIÓN PARA CERRAR EL MODAL*/
function cerrarmodal9() {
  const modal = document.querySelector('.modal9');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn9 = document.querySelector('.cerrar9');
  if (cerrarBtn9) {
    cerrarBtn9.addEventListener('click', cerrarmodal9);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal9');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido9 = document.querySelector('.modal-contenido9');
let isDragging9 = false;
let offsetX9, offsetY9;

modalContenido9.addEventListener('mousedown', (e) => {
  isDragging9 = true;
  offsetX9 = e.clientX - modalContenido9.offsetLeft;
  offsetY9 = e.clientY - modalContenido9.offsetTop;
  modalContenido9.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging9 = false;
  modalContenido9.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging9) {
    modalContenido9.style.left = `${e.clientX - offsetX9}px`;
    modalContenido9.style.top = `${e.clientY - offsetY9}px`;
    modalContenido9.style.position = 'absolute';
  }
});


// ======== LIKE (MANITO) ========
document.querySelectorAll('.like').forEach(like => {
  const recetaId = like.dataset.recetaId;
  const icono = like.querySelector('.like-icon');
  const contador = like.querySelector('.manito');

  // Cargar estado guardado
  const guardado = JSON.parse(localStorage.getItem(`like_${recetaId}`)) || { liked: false, count: 0 };
  contador.textContent = guardado.count;
  if (guardado.liked) icono.classList.replace('far', 'fas');

  like.addEventListener('click', () => {
    let estado = JSON.parse(localStorage.getItem(`like_${recetaId}`)) || { liked: false, count: 0 };
    estado.liked = !estado.liked;
    estado.count += estado.liked ? 1 : -1;
    if (estado.count < 0) estado.count = 0;

    contador.textContent = estado.count;
    icono.classList.toggle('fas', estado.liked);
    icono.classList.toggle('far', !estado.liked);

    localStorage.setItem(`like_${recetaId}`, JSON.stringify(estado));
  });
});

// ======== ESTRELLAS ========
document.querySelectorAll('.rating').forEach(rating => {
  const estrellas = rating.querySelectorAll('.estrellas');
  const recetaId = rating.closest('.contenido').querySelector('h3').textContent;

  const guardado = localStorage.getItem(`rating_${recetaId}`);
  if (guardado) {
    llenarEstrellas(estrellas, guardado);
  }

  estrellas.forEach(estrella => {
    estrella.addEventListener('click', () => {
      const valor = estrella.dataset.valor;
      llenarEstrellas(estrellas, valor);
      localStorage.setItem(`rating_${recetaId}`, valor);
    });
  });
});

function llenarEstrellas(estrellas, valor) {
  estrellas.forEach(e => {
    if (e.dataset.valor <= valor) {
      e.classList.replace('far', 'fas');
    } else {
      e.classList.replace('fas', 'far');
    }
  });
}