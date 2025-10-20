let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    // Selecciona todos los elementos con la clase 'carousel-slide'
    const slides = document.getElementsByClassName("carousel-slide");
    
    // Oculta todas las diapositivas
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Avanza al siguiente slide
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Vuelve al inicio
    }
    
    // Muestra el slide actual
    slides[slideIndex - 1].style.display = "block";
    
    // Cambia la imagen cada 5 segundos (5000 milisegundos)
    setTimeout(showSlides, 5000); 
}
/*MODAL RECETA 1 EMPANADAS*/
function Abrirmodal(recetaId) {
  const modal = document.querySelector('.modal');
  const titulo = document.querySelector('.titulo-receta');
  const cuerpo = document.querySelector('.receta-info');

  // Ejemplo de contenido del modal (puedes editar o agregar más)
  if (recetaId === 'receta-empanadas') {
    titulo.textContent = 'Receta de empanadas Salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 platanos grandes maduros. </li>
          <li>4 tazas de agua (para hervir los platanos).</li>
          <li>3 rajas de canela (o canela al gusto).</li>
          <li>2 cucharadas de azúcar para hervir el platano.</li>
          <li>3/4 tazas de leche. </li>
          <li>1/2 cuchrada de azúcar para la leche (o al gusto).</li>
          <li>3 cucharadas de maizena.</li>
        </ul>

        <img src="imagenes/empanadas.jpg" alt="empanadas" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b> Paso 1:</b> Poner una olla a fuego alto con 4 tazas de agua a hervir.</li>
          <li><b> Paso 2:</b> Remover las puntas de los plátanos, cortar los platanos
           en trozos de unos 3 o 4 centimetros. No remueva cascara.</li>
          <li><b> Paso 3:</b> Cuando el agua este hirviendo, poner los dos plátanos cortados en trozos 
          pequeños, la canela y las 2 cucharadas de azúcar.</li>
          <li><b> Paso 4:</b> Mientras el plátano se cocina, preparar el relleno de leche: poner una olla a fuego medio
          y agregar 1/2 taza de leche, vainilla y el azúcar y dejarla hervir.</li>
          <li><b> Paso 5:</b> Disolver la maizena en el 1/4 de taza de leche restante y cuando la leche esta hirviendo agregar
          la maizena disuelta pocoa poco mientras revuelve con una cuchara.</li>
          <li><b> Paso 6:</b> Mantener revolviendo la leche constantemente para evtar que se aume la leche. Al final
          obtendran una pasta cremosita. La retiran de el fuego y dejar enfriar en un contenedor aparte</li>
          <li><b> Paso 7:</b> A este punto el plátano debe estar listo. Remover la cascara y también remover la semilla de el centro
          de el plátano</li>
          <li><b> Paso 8:</b> Con un tenedor o aplastador de papa, aplastar el plátano hasta obtener una pasta suavecita y manejable.</li>
          <li><b> Paso 9:</b> Cuando el plátano ya no esté tan caliente como para agarrarlo con la mano y no quemarse.
          tomen un porción de la masa de el plátano y le dan forma de tortilla.</li>
          <li><b> Paso 10:</b> Luego, le ponen la leche poleada en el centro y la cierran muy bien.</li>
          <li><b> Paso 11:</b> Coloca las empanadas en una cacerola con aceite a fuego medio. Es preferible que sea suficiente aceite para 
          cubrirlas por completo. Cuando ya se vean doraditas, voltearlas. </li>
          <li><b> Paso 12:</b> Si desean pueden espolvorerles azúcar antes de servirlas.</li>
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




/*MODAL RECETA 2 NUEGADOS*/
function Abrirmodal2(recetaId) {
  const modal = document.querySelector('.modal2');
  const titulo = document.querySelector('.titulo-receta2');
  const cuerpo = document.querySelector('.receta-info2');

  // Ejemplo de contenido del modal 2
  if (recetaId === 'receta-nuegados') {
    titulo.textContent = 'Receta de Nuegados Salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 tazas yuca molida cruda.</li>
          <li>2 huevos</li>
          <li>1 cdta polvo de hornear</li>
          <li>½ taza queso rallado</li>
          <li>Sal al gusto</li>
          <li>Manteca o aceite suficiente para freír</li>
        </ul>

         <img src="imagenes/nuegados.jpg" alt="nuegados" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b> Paso 1:</b> Agrega en un recipiente todos los ingredientes para mezclar 
          y formar una masa suave. Menos el aceite para freír.</li>
          <li><b> Paso 2:</b> Amasa bien hasta formar una masa suave.</li>
          <li><b> Paso 3:</b> Forma pequeñas bolitas de un tamaño regular, recuerda
           que crecen un poco al freírse.</li>
          <li><b> Paso 4:</b> En una sartén agrega el aceite o manteca para freír.</li>
          <li><b> Paso 5:</b> Fríe hasta que se vean doradas.</li>
          <li><b> Paso 6:</b> Por ultimo Sirve los nuégados y báñalos con la miel.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  // Mostrar modal 2
  modal.style.display = 'block';
}

// ======== FUNCIÓN PARA CERRAR EL MODAL 2 ========
function cerrarmodal2() {
  const modal = document.querySelector('.modal2');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 2
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn2 = document.querySelector('.cerrar2');
  if (cerrarBtn2) {
    cerrarBtn2.addEventListener('click', cerrarmodal2);
  }
});

// Cerrar al hacer clic fuera del modal 2
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal2');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 2 SEA MÓVIL ========
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



/*MODAL RECETA 3 JOCOTE EN MIEL*/
function Abrirmodal3(recetaId) {
  const modal = document.querySelector('.modal3');
  const titulo = document.querySelector('.titulo-receta3');
  const cuerpo = document.querySelector('.receta-info3');

  // Ejemplo de contenido del modal 3
  if (recetaId === 'receta-Jocote en miel') {
    titulo.textContent = 'Receta jocotes en miel';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>25 Jocotes</li>
          <li>2 litros de Agua</li>
          <li>1 Dulce de atado de panela</li>
          <li>Canela</li>
          <li>1 taza de Ceniza</li>
        </ul>

        <img src="imagenes/Jocote en miel.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Para preparar esta receta, se debe comenzar poniendo a hervir el agua con la ceniza.</li>
          <li><b> Paso 2:</b> Cuando los jocotes estén agrietados, se sacan del agua y se les quita 
          la cáscara con la mano.</li>
          <li><b> Paso 3:</b> Cuando los jocotes estén agrietados, se sacan del agua y se les quita
           la cáscara con la mano.</li>
          <li><b> Paso 4:</b> Luego, se cortan en cruz sin quitar la semilla y se guardan para su uso posterior.</li>
          <li><b> Paso 5:</b> En otra olla, se coloca el dulce de atado y la canela con agua a fuego lento.</li>
          <li><b> Paso 6:</b> A continuación, se agregan los jocotes ya pelados a la mezcla en la olla.</li>
          <li><b> Paso 7:</b> Se deja cocinar por aproximadamente una hora y se verifica si la miel ya está lista para servir.</li>
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


/*MODAL RECETA 4 TORREJAS*/
function Abrirmodal4(recetaId) {
  const modal = document.querySelector('.modal4');
  const titulo = document.querySelector('.titulo-receta4');
  const cuerpo = document.querySelector('.receta-info4');

  // Ejemplo de contenido del modal 2
  if (recetaId === 'receta-torrejas') {
    titulo.textContent = 'Receta de torrejas salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 huevos grandes</li>
          <li>2 cucharads de harina</li>
          <li>300ml de leche entera</li>
          <li>1 rama de canela</li>
          <li>1L de agua</li>
          <li>Canela en polvo</li>
          <li>5 granos de pimineta negra</li>
          <li>1/4 cucharadita de jengibre molido</li>
          <li>1/4 cucharadita de nuez moscada molida</li>
          <li>400g de panela</li>
        </ul>

        <img src="imagenes/Torrejas.jpg" alt="Torrejas" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b> Paso 1:</b> Hierva la leche con la ramita de canela.</li>
          <li><b> Paso 2:</b> Retírela del fuego. Deje enfriar y deje reposar la canela durante 30 minutos.</li>
          <li><b> Paso 3:</b> Corten el pan brionche en rebanadas de 2cm de grosor.</li>
          <li><b> Paso 4:</b> Separe lso huevos, y luego bata las claras de huevo e incorpore
          las yemas y la harina.</li>
          <li><b> Paso 5:</b> Caliente una cantidad generosa de acite o margarina en una sartén a fuego medio.</li>
          <li><b> Paso 6:</b> Sumerja las rebanadas de pan rápidamente en la leche.</li>
          <li><b> Paso 7:</b> Luego, sumérjalas en la mezcla de huevo y harina.</li>
          <li><b> Paso 8:</b> Añadalas a la sartén y frialas por ambos lados, sin que se quemen.</li>
          <li><b> Paso 9:</b> para el jarabe coloque todos los ingredientes en una sartén antiadherente.</li>
          <li><b> Paso 10:</b> Hierva a fuego lento durante unso minutos, hasta que la panela se disuelva y hasta obtener
          un jarabe espeso.</li>
          <li><b> Paso 11:</b> Retire del fuego y deje enfriar. El liquido se espesará un poco más cuando se 
          enfríe.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  // Mostrar modal 2
  modal.style.display = 'block';
}

// ======== FUNCIÓN PARA CERRAR EL MODAL 2 ========
function cerrarmodal4() {
  const modal = document.querySelector('.modal4');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 2
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn4 = document.querySelector('.cerrar4');
  if (cerrarBtn4) {
    cerrarBtn4.addEventListener('click', cerrarmodal4);
  }
});

// Cerrar al hacer clic fuera del modal 2
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal4');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 2 SEA MÓVIL ========
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



/*MODAL RECETA 5 QUESADILLA*/
function Abrirmodal5(recetaId) {
  const modal = document.querySelector('.modal5');
  const titulo = document.querySelector('.titulo-receta5');
  const cuerpo = document.querySelector('.receta-info5');

  if (recetaId === 'receta-quesadilla') {
    titulo.textContent = 'Receta de quesadillas salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 tazas de masa de maíz</li>
          <li>1 taza de caldo de pollo</li>
          <li>1 taza de pollo desmenuzado</li>
          <li>Hojas de plátano para envolver</li>
        </ul>
          
         <img src="imagenes/Quesadilla.jpg" alt="Quesadilla" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li>Mezcla la masa con el caldo hasta obtener una consistencia suave.</li>
          <li>Coloca un poco de masa en la hoja, agrega el pollo y envuelve.</li>
          <li>Cocina los tamales al vapor por aproximadamente 45 minutos.</li>
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
function cerrarmodal5() {
  const modal = document.querySelector('.modal5');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 3
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn5 = document.querySelector('.cerrar5');
  if (cerrarBtn5) {
    cerrarBtn5.addEventListener('click', cerrarmodal5);
  }
});

// Cerrar al hacer clic fuera del modal 3
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal5');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 3 SEA MÓVIL ========
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


/*MODAL RECETA 6 MARQUESOTE*/
function Abrirmodal6(recetaId) {
  const modal = document.querySelector('.modal6');
  const titulo = document.querySelector('.titulo-receta6');
  const cuerpo = document.querySelector('.receta-info6');

  if (recetaId === 'receta-marquesote') {
    titulo.textContent = 'Receta de marquesote salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>300 gr de harina de trigo todo uso</li>
          <li>300 gr de azúcar blanca</li>
          <li>6 huevos</li>
          <li>1 cucharadita de canela</li>
        </ul>

         <img src="imagenes/Marquesote.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Tamiza la harina de trigo muy bien.</li>
          <li><b> Paso 2:</b> Luego. Incorpora los huevos de a uno en una batidora y bate por
          varios minutos para aumentar su volumen.</li>
          <li><b> Paso 3:</b> Cuando aumente su volumen, vierte azúcar blanca muy bien hasta que quede aireado.</li>
          <li><b> Paso 4:</b> Añade progresivamente el harina de trigo tamizada y la canela. Mezcla hasta
           crear una textura homogénea.</li>
          <li><b> Paso 6:</b> Precalienta el horno a 200°C.</li>
          <li><b> Paso 7:</b> Toma la margarina y engrasa un molde rectangular alto.</li>
          <li><b> Paso 8:</b> Vierte la mezcla en el molde y distribuye muy bien. Hornea por 25 minutos a 200°C.</li>
          <li><b> Paso 9:</b> En ese tiempo, verifica introduciendo un palilo o cuchillo para ver si
          sale limpio, si esta humedo o con migas le falta coción, asi que debes ir monitoreando.</li>
          <li><b> Paso 10:</b> Retira del horno, deja reposar, desmolda y corta porciones.</li>
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



/*MODAL RECETA 7 CANOAS*/
function Abrirmodal7(recetaId) {
  const modal = document.querySelector('.modal7');
  const titulo = document.querySelector('.titulo-receta7');
  const cuerpo = document.querySelector('.receta-info7');

  if (recetaId === 'receta-canoas') {
    titulo.textContent = 'Receta de canoas salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 plátanos maduros </li>
          <li>2 cucharadas de pasas o al gusto (opcional) </li>
          <li>2 cucharaditas de canela en polvo</li>
          <li>2 cucharadas de maicena</li>
          <li>1/2 taza de leche líquida y fría  </li>
          <li>2 cucharadas de azúcar o leche condensada  </li>
          <li>2 rajitas de canela </li>
          <li>Una yema de huevo</li>
        </ul>

         <img src="imagenes/Canoas.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Primero pele los plátanos. Les recomendamos que no esten demasiado maduros ni demasiado duros.</li>
          <li><b> Paso 2:</b> Ponga un sartén al fuego y agregue aceite o margarina para freír los plátanos enteros. Dórelos por 
          todos los lados hasta que la superficie de estos tomen un color marrón o doraditos. Reservar. .</li>
          <li><b> Paso 3:</b> Para hacer el relleno de las canoas tendrá que preparar una especie de leche poleada. Para ello 
          utilizará la maicena que mezclará con la leche líquida fría, después añada la leche
           condensada y la yema de huevo.</li>
          <li><b> Paso 4:</b> Posteriormente, bata energicamente todos los ingredientes con una cuchara o batidora.</li>
          <li><b> Paso 6:</b> Coloque una olla al fuego, y añada la mezcla de las leches, el huevo y la maicena, así como 
          las rajas de canela y cocine a fuego lento moviendo la mezcla constantemente con una cuchara de palo, la razón
           principal es para evitar que se pegue a la olla y se le ahume.</li>
           <li><b>Paso 7:</b> Abra cada uno de los plátanos previamente fritos, a lo largo y por la mitad sin cortarlos
            completamente. Rellenelos con la leche poleada que acaba de preparar, rocíe el relleno con canela en polvo y las pasas… y LISTO!.</li>
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


/*MODAL RECETA 8 POLEADA*/
function Abrirmodal8(recetaId) {
  const modal = document.querySelector('.modal8');
  const titulo = document.querySelector('.titulo-receta8');
  const cuerpo = document.querySelector('.receta-info8');

  if (recetaId === 'receta-poleada') {
    titulo.textContent = 'Receta de poleada salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>5 tazas de Leche entera</li>
          <li>150 gramos de Maicena</li>
          <li>3 Yemas de huevo</li>
          <li>200 gramos de Azúcar</li>
          <li>1 cuchara de Vainilla</li>
          <li>Canela en polvo</li>
          <li>1 pizca de Sal</li>
        </ul>

         <img src="imagenes/Poleada.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Licúa 2 tazas de leche, azúcar, maicena, y las yemas, agregando una pizca de sal.</li>
          <li><b> Paso 2:</b> Hierve 3 tazas de leche en una olla aparte.</li>
          <li><b> Paso 3:</b> Vierte la mezcla licuada en la leche hirviendo, removiendo con cuidado hasta espesar.</li>
          <li><b>Paso 4:</b>Agrega vainilla, canela en polvo, y sirve frío, decorando con canela en rama.</li>
          
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


/*MODAL RECETA 9 ARROZ EN LECHE*/
function Abrirmodal9(recetaId) {
  const modal = document.querySelector('.modal9');
  const titulo = document.querySelector('.titulo-receta9');
  const cuerpo = document.querySelector('.receta-info9');

  if (recetaId === 'receta-arroz en leche') {
    titulo.textContent = 'Receta de arroz en leche salvadoreño';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1/2 libra arroz blanco</li>
          <li>azúcar (a nuestro gusto)</li>
          <li>1 raja canela</li>
          <li>1/2 litro leche líquida</li>
        </ul>

         <img src="imagenes/Arroz en leche.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Primero pondremos agua a hervir en una ollita profunda con las rajas de canela.</li>
          <li><b> Paso 2:</b> Lavaremos nuestro arroz blanco (no precocido) y lo dejaremos remojando (en agua) por unos 5 min.</li>
          <li><b> Paso 3:</b> Y cuando nuestra agua ya este hirviendo echaremos nuestro arroz ya remojado y agregaremos azucar y lo 
          menearemos un minuto y cocinaremos a fuego bajo hasta que este blandito nuestro arroz (estar pendientes para que no se nos pegue el arroz.).</li>
          <li><b>Paso 4:</b>Cuando nuestro arroz ya este blandito echaremos nuestra leche (suficiente)y mas azúcar a nuestro gusto 
          probar para que quede dulce a nuestro gusto y dejaremos hervir por 4 o 5 minutos más para que el arroz agarre sabor a la leche.</li>
          <li><b>Paso 5:</b> Cuando veamos el arroz a su punto como nos gusta... servimos con canela molida encima y listo.</li>
          
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



/*MODAL RECETA 10 ALBOROTO*/
function Abrirmodal10(recetaId) {
  const modal = document.querySelector('.modal10');
  const titulo = document.querySelector('.titulo-receta10');
  const cuerpo = document.querySelector('.receta-info10');

  if (recetaId === 'receta-alboroto') {
    titulo.textContent = 'Receta de alboroto salvadoreño';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>250 gr de maicillo maíz para palomitas</li>
          <li>250 gr de atado de dulce</li>
          <li>1 taza de agua</li>
        </ul>

         <img src="imagenes/alboroto.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
            <li><b>Paso 1:</b> En una sarten u olla agrega un poco de aceite y ierte el maicillo hasta que
            empiece a reventar.</li>
          <li><b> Paso 2:</b> En un recipiente disolver el atado de dulce en el agua y colocar
          al fuego hasta que hierva y adquiera una consistencia semi gruesa y retiraro del fuego.</li>
          <li><b> Paso 3:</b> En un recipiente agregue maicillo con la miel de atado y mezclarlos bien hasta
          que se incorporen.</li>
          <li><b> Paso 4:</b> Hacer bolas medianas tomando con la mano porciones de la mezcla, apelmazándolas
          para que queden compactas y no se desmoronen.</li>
          <li><b> Paso 5:¡BUEN PROVECHO!</b> .</li>
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
function cerrarmodal10() {
  const modal = document.querySelector('.modal10');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn10 = document.querySelector('.cerrar10');
  if (cerrarBtn10) {
    cerrarBtn10.addEventListener('click', cerrarmodal10);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal10');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido10 = document.querySelector('.modal-contenido10');
let isDragging10 = false;
let offsetX10, offsetY10;

modalContenido10.addEventListener('mousedown', (e) => {
  isDragging10 = true;
  offsetX10 = e.clientX - modalContenido9.offsetLeft;
  offsetY10 = e.clientY - modalContenido9.offsetTop;
  modalContenido10.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging10 = false;
  modalContenido10.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging10) {
    modalContenido10.style.left = `${e.clientX - offsetX10}px`;
    modalContenido10.style.top = `${e.clientY - offsetY10}px`;
    modalContenido10.style.position = 'absolute';
  }
});



/*MODAL RECETA 11 CONSERVA*/
function Abrirmodal11(recetaId) {
  const modal = document.querySelector('.modal11');
  const titulo = document.querySelector('.titulo-receta11');
  const cuerpo = document.querySelector('.receta-info11');

  if (recetaId === 'receta-conserva') {
    titulo.textContent = 'Receta de conserva salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 Lb. de Coco rallado</li>
          <li>1 Lb. de Azucar o Dulce de panela</li>
          <li>2 Rajas de canela</li>
          <li>2 tazas de Agua</li>
        </ul>

         <img src="imagenes/conserva.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Si pudieran comprar algunos cocos secos y extraer la comida blanca de adentro, 
          sería mucho mejor. En ese caso, se muelen los cocos secos en un procesador de alimentos
           o en última instancia se rallan con un rallador de mano.</li>
          <li><b> Paso 2:</b> En una olla coloca agua, el azucar y las rajas de canela, cocina a fuego suave 
          hasta que el azucar se haya disuelto por completo, agrega el coco y continua hirviendo a fuego suave 
          hasta que la mezcla comience a cuajar.</li>
          <li><b> Paso 3:</b> Retira del fuego y esparce la mezcla sobre una tabla, deja que enfrie y cortalo en cuadritos.
           Tambien pudieras esparcir la mezcla en un molde para hornear ligeramente engrasado.</li>
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
function cerrarmodal11() {
  const modal = document.querySelector('.modal11');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn11 = document.querySelector('.cerrar11');
  if (cerrarBtn11) {
    cerrarBtn11.addEventListener('click', cerrarmodal11);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal11');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido11 = document.querySelector('.modal-contenido11');
let isDragging11 = false;
let offsetX11, offsetY11;

modalContenido11.addEventListener('mousedown', (e) => {
  isDragging11 = true;
  offsetX11 = e.clientX - modalContenido11.offsetLeft;
  offsetY11 = e.clientY - modalContenido11.offsetTop;
  modalContenido11.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging11 = false;
  modalContenido11.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging11) {
    modalContenido11.style.left = `${e.clientX - offsetX11}px`;
    modalContenido11.style.top = `${e.clientY - offsetY11}px`;
    modalContenido11.style.position = 'absolute';
  }
});


/*MODAL RECETA 12 DULCE DE LECHE*/
function Abrirmodal12(recetaId) {
  const modal = document.querySelector('.modal12');
  const titulo = document.querySelector('.titulo-receta12');
  const cuerpo = document.querySelector('.receta-info12');

  if (recetaId === 'receta-Dulce de leche') {
    titulo.textContent = 'Receta de dulce de leche salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>8 cucharas de Mantequilla</li>
          <li>400 gramos de Leche condensada</li>
          <li>250 gramos de Azúcar</li>
          <li>150 mililitros de Leche entera</li>
          <li>1 cuchara de Vainilla</li>
        </ul>

         <img src="imagenes/dulce de leche.jpg" alt="Jocote en miel" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> En una olla antiadherente, se incorporan los ingredientes de leche 
          condensada, mantequilla, azúcar, leche entera y vainilla.</li>
          <li><b> Paso 2:</b> Se cocina a fuego lento, removiendo constantemente por aproximadamente 35 minutos.</li>
          <li><b> Paso 3:</b> Luego se retira la mezcla del fuego y se sigue revolviendo con un cucharón de 
          madera hasta que espese.</li>
          <li><b> Paso 4:</b> Posteriormente, se vierte la mezcla en un recipiente y se tapa bien para dejar enfriar.</li>
          <li><b> Paso 5:</b>Una vez que endurezca, se corta al gusto y se puede disfrutar.</li>
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
function cerrarmodal12() {
  const modal = document.querySelector('.modal12');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn12 = document.querySelector('.cerrar12');
  if (cerrarBtn12) {
    cerrarBtn12.addEventListener('click', cerrarmodal12);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal12');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido12 = document.querySelector('.modal-contenido12');
let isDragging12 = false;
let offsetX12, offsetY12;

modalContenido12.addEventListener('mousedown', (e) => {
  isDragging12 = true;
  offsetX12 = e.clientX - modalContenido11.offsetLeft;
  offsetY12 = e.clientY - modalContenido11.offsetTop;
  modalContenido12.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging12 = false;
  modalContenido12.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging12) {
    modalContenido12.style.left = `${e.clientX - offsetX12}px`;
    modalContenido12.style.top = `${e.clientY - offsetY12}px`;
    modalContenido12.style.position = 'absolute';
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




