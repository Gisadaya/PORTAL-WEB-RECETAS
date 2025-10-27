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
    
    
    slides[slideIndex - 1].style.display = "block";

    // Cambia la imagen cada 4 segundos (4000 milisegundos)
    setTimeout(showSlides, 4000);
}

const menuToggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.links');
const dropdowns = document.querySelectorAll('.menu-desplegable');

menuToggle.addEventListener('click', () => {
  links.classList.toggle('active');
});

// Permite abrir submenús al tocar en móvil
dropdowns.forEach(drop => {
  drop.addEventListener('click', e => {
    if (window.innerWidth <= 458) {
      e.preventDefault();
      drop.classList.toggle('open');
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

/*MODAL RECETA 1 PUPUSAS*/
function Abrirmodal(recetaId) {
  const modal = document.querySelector('.modal');
  const titulo = document.querySelector('.titulo-receta');
  const cuerpo = document.querySelector('.receta-info');

  // Ejemplo de contenido del modal (puedes editar o agregar más)
  if (recetaId === 'receta-pupusas') {
    titulo.textContent = 'Receta de Pupusas Salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>4 tazas de harina de maíz</li>
          <li>2 tazas de agua tibia</li>
          <li>1 cucharadita de sal</li>
           <li>1 taza de quesillo</li>
          <li>1 taza de frijoles refritos</li>
          <li>Salsa y curtido para acompañar</li>
        </ul>

        
                <img src="imagenes/Pupusas.jpg" alt="pupusas" class="img-modal">
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>	En un bol grande mezclar la harina de maíz, con el agua 
          tibia (de a poco) y la sal hasta que la masa esté suave y manejable. Dejar reposar 
          unos 15/20 minutos, tapada con un paño. </li>
          <li><b>Paso 2:</b>	Una vez que la masa reposó, formar unas bolitas del tamaño 
          de una pelota de golf. Tip: Se pueden humedecer las manos o ponerles un poco de 
          aceite para el armado.</li>
          <li><b>Paso 3:</b>	Para rellenarlas hacer un agujero con los dedos en cada bolita 
          de masa, hasta que sea lo suficientemente grande como para agregar el relleno.</li>
           <li><b>Paso 4:</b>	Agregar, aproximadamente, 1 cucharada de quesillo o frijoles
            refritos al agujero de la masa. Cerrar el agujero con cuidado y volver a formar la bola
             de masa. Aplastar cada bola de masa rellena con las manos para darle forma de tortilla.</li>
             <li><b>Paso 5:</b>	Cocinar las pupusas en un comal o sartén caliente durante 2-3 minutos de cada lado</li>
          <li><b>Paso 6:</b>	Servir caliente con salsa y curtido, o con el acompañamiento elegido.</li>
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




/*MODAL RECETA 2 TAMALES DE POLLO*/
function Abrirmodal2(recetaId) {
  const modal = document.querySelector('.modal2');
  const titulo = document.querySelector('.titulo-receta2');
  const cuerpo = document.querySelector('.receta-info2');

  // Ejemplo de contenido del modal 2
  if (recetaId === 'receta-tamales de pollo') {
    titulo.textContent = 'Receta de tamales de pollo Salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 tazas de masa de maíz</li>
          <li>1 taza de caldo de pollo</li>
          <li>1 pechuga de pollo cocida y desmenuzada</li>
          <li>1 zanahoria rallada</li>
          <li>1 pimiento rojo picado</li>
          <li>1 cebolla picada</li>
          <li>2 dientes de ajo picados</li>
          <li>1 tomate picado</li>
          <li>1 chile verde picado</li>
          <li>1 ramita de cilantro picado</li>
          <li>1 cucharadita comino</li>
          <li>1 cucharadita pimienta</li>
          <li>1 cucharadita achiote en polvo</li>
          <li>Hojas de plátano para envolver los tamales</li>
        </ul>


                <img src="imagenes/Tamales de pollo.jpg" alt="Tamales de pollo" class="img-modal">
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
         <li><b>Paso 1:</b>	En un recipiente grande, mezcla la masa de maíz con el caldo 
         de pollo hasta obtener una mezcla suave y homogénea.</li>
          <li><b>Paso 2:</b>	Añade la pechuga de pollo desmenuzada, la zanahoria rallada,
           el pimiento rojo, la cebolla, el ajo, el tomate, el chile verde, el cilantro, el
            comino, la pimienta y el achiote en polvo. Mezcla bien todos los ingredientes.</li>
          <li><b>Paso 3:</b>	Toma una hoja de plátano y coloca una porción de la mezcla en el
           centro. Envuelve la masa con la hoja formando un tamal. Repite este paso con el
            resto de la mezcla y las hojas de plátano. </li>
          <li><b>Paso 4:</b>	Coloca los tamales en una olla grande con agua hirviendo. Cocina 
          a fuego medio-bajo durante aproximadamente 1 hora y 30 minutos o hasta que la masa esté cocida.</li>
          <li><b>Paso 5:</b>	Sirve los tamales calientes y disfruta de este delicioso platillo salvadoreños. </li>
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



/*MODAL RECETA 3 RIGUAS*/
function Abrirmodal3(recetaId) {
  const modal = document.querySelector('.modal3');
  const titulo = document.querySelector('.titulo-receta3');
  const cuerpo = document.querySelector('.receta-info3');

  // Ejemplo de contenido del modal 3
  if (recetaId === 'receta-riguas') {
    titulo.textContent = 'Receta de riguas salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>3 tazas de Granos de elote (medio duros y medio tiernos)</li>
          <li>1 pizca de Sal</li>
          <li>½ cuchara de Azúcar</li>
          <li>15 gramos de Manteca o margarina</li>
           <li>Hojas de huerta</li>
        </ul>


        <img src="imagenes/Riguas.jpg" alt="Riguas" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>Moler los granos de elote junto con la sal, el azúcar y la manteca
           hasta obtener una masa líquida y de color claro.</li>
          <li><b>Paso 2:</b>	Cortar las hojas de huerta en trozos de aproximadamente 30 x 30 centímetros.</li>
          <li><b>Paso 3:</b>	Colocar dos cucharadas de masa en el centro de cada hoja, doblarla para
           envolver la masa y sellar. </li>
          <li><b>Paso 4:</b>	Cocinar en un comal a fuego lento durante 5 minutos por cada lado hasta que se 
          endurezcan y estén listos para servir.</li>
          <li><b>Paso 5:</b> ¡Allí tienes un delicioso platillo listo para degustar!</li>
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


/*MODAL RECETA 4 SOPA DE RES*/
function Abrirmodal4(recetaId) {
  const modal = document.querySelector('.modal4');
  const titulo = document.querySelector('.titulo-receta4');
  const cuerpo = document.querySelector('.receta-info4');

  // Ejemplo de contenido del modal 2
  if (recetaId === 'receta-sopa de res') {
    titulo.textContent = 'Receta sopa de res salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 1/2 Hueso deres de preferencia con carne</li>
          <li>Perejil</li>
          <li>Cilantro</li>
          <li>Apio</li>
          <li>Hierbabuena</li>
          <li>4 Tomates grandes</li>
          <li>1 Chile verde</li>
          <li>1 Cebolla grande</li>
          <li>Agua para el caldo</li>
          <li>1 Cabeza de ajo</li>
          <li>Limón</li>
          <li>2 Yucas grandes</li>
          <li>6 Gisquil</li>
          <li>Ejotes</li>
          <li>3 Elotes</li>
          <li>2 Zanahorias</li>
          <li>1 Repollo grande</li>
          <li>10 Pipían pequeños</li>
        </ul>


               
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> En una olla grande, coloca el agua y hervir con el hueso de res a fuego medio hasta que libere sabor.</li>
          <li><b>Paso 2:</b>	Agregar las hiervas aromáticas, tomates, chile verde, cebolla y ajo, y cocinar durante 20 minutos, vigilando el nivel
          de agua.</li>
          <li><b>Paso 3:</b>	Mientras tanto, cortar las verduras en trozos pequeños. Añadir primero la yuca y el elote, 
          seguidos de las demás verduras en orden de cocción. </li>
          <li><b>Paso 4:</b>	Al terminar, incorporar el repollo y pipián, cocinar otros 50 minutos, ajustar la sal y al servir caliente
          con limón.</li>
        </ul>
         <img src="imagenes/sopa de res.jpg" alt="Sopa de res" class="img-modal">
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



/*MODAL RECETA 5 SOPA DE GALLINA INDIA*/
function Abrirmodal5(recetaId) {
  const modal = document.querySelector('.modal5');
  const titulo = document.querySelector('.titulo-receta5');
  const cuerpo = document.querySelector('.receta-info5');

  if (recetaId === 'receta-sopa de gallina india') {
    titulo.textContent = 'Receta sopa de gallina india salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 Gallina india previamente aliñada</li>
          <li>2 Tomates medianos jugosos</li>
          <li>1 Cebolla mediana</li>
          <li>1 Chile pequeño</li>
          <li>5 Ajos pelados</li>
          <li>Hojas albahaca</li>
          <li>Hojas hierba buena, perejil y cilantro</li>
          <li>Hojas chile chiltepe</li>
          <li>2 Guisquiles</li>
          <li>3 Papas</li>
          <li>2 Zanahoria pequeñas o medianas</li>
          <li>4 Pipianes</li>
          <li>2 Elotes</li>
          <li>¼ taza de Granos de arroz</li>
          <li>1 pizca de Sal</li>
        </ul>

        
                
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> En una olla grande, coloca la gallina aliñada y cúbrela con agua. Añade sal y cocina 
          a fuego medio hasta que la gallina esté tierna, aproximadamente una hora y cuarenta y cinco minutos.</li>
          <li><b>Paso 2:</b> Agrega los tomates, chile, cebolla, ajos, verduras, arroz y las hierbas
           (albahaca, hierbabuena, perejil, cilantro y chile chiltepe) a la olla. Continúa cocinando hasta que las
            verduras y el arroz estén bien cocidos y la sopa tenga sabor profundo.</li>
          <li><b>Paso 3:</b> Sirve caliente, disfrutando de esta reconfortante sopa que combina sabores herbales, 
          vegetales y la ternura de la gallina cocida lentamente. </li>
        </ul>
        <img src="imagenes/sopa de gallina india.jpg" alt="sopa de gallina india" class="img-modal">
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


/*MODAL RECETA 6 SOPA DE FRIJOLES CON HUESO DE CERDO*/
function Abrirmodal6(recetaId) {
  const modal = document.querySelector('.modal6');
  const titulo = document.querySelector('.titulo-receta6');
  const cuerpo = document.querySelector('.receta-info6');

  if (recetaId === 'receta-sopa de frijoles con hueso de cerdo') {
    titulo.textContent = 'Receta sopa de frijoles con huso de cerdo salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 libra de Frijoles</li>
          <li>1 libra de costilla de cerdo</li>
          <li>1 cebolla blanca </li>
          <li>3 guineos verdes con 1 mazo de cilantro</li>
           <li>1 chile dulce con 3 dientes de ajo</li>
          <li>2 consomé de costilla</li>
          <li>1 libra de yuca</li>
          <li>pimienta y sal</li>
        </ul>


        <img src="imagenes/Sopa de frijoles con hueso de cerdo.jpg" alt="Sopa de frijoles con hueso de cerdo" class="img-modal">
    </div>
      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Para preparar esta deliciosa receta, los frijoles limpios se colocan en una olla y se cocinan durante 10 minutos.</li>
          <li><b>Paso 2:</b> Luego, se apaga la estufa, se tapan y se dejan remojando durante 1 hora. </li>
          <li><b>Paso 3:</b Mientras tanto, en una sartén, se sofrie ligeramente la costilla hasta que esté a medio cocer.</li>
          <li><b>Paso 4:</b> Transcurrido el tiempo de remojo de los frijoles, se enciende nuevamente la estufa y se añaden todos
          los condimientos y la carne durante 15 minutos.</li>
          <li><b>Paso 5:</b> Despues de este tiempo, se incorporan los guineos y la yuca a la preparación, y se deja cocinar
          durante 10 minutos más. </li>
          <li><b>Paso 6:</b> Finalmente, se sirve el plato junto con arroz blanco como acompañante. </li>
          <li><b>Paso 7:</b> ¡A disfrutar de esta exquisita comida! </li>
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



/*MODAL RECETA 7 PANES RELLENOS*/
function Abrirmodal7(recetaId) {
  const modal = document.querySelector('.modal7');
  const titulo = document.querySelector('.titulo-receta7');
  const cuerpo = document.querySelector('.receta-info7');

  if (recetaId === 'receta-panes rellenos') {
    titulo.textContent = 'Receta panes rellenos salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>4 pechugas de pollo</li>
          <li>Salsa inglesa</li>
          <li>2 pepinos</li>
          <li>Sal y pimienta</li>
          <li>1 lechuga</li>
          <li>10 tomates, picados en cuatro</li>
          <li>1 cebolla, picada en cuatro</li>
          <li>½ pimiento verde, picado en cuatro</li>
          <li>Relajo tostado (Laurel, chile guaco seco, chile ciruela,
           ajonjolí, maní o cacahuate, achiote en polvo, pimienta gorda,
            clavo de olor, pepitoria, orégano seco, comino y ajo)</li>
            <li>4 rábanos</li>
          <li>Mayonesa</li>
          <li>4 tomates manzanos o para ensalada</li>
        </ul>

        
                <img src="imagenes/Panes rellenos.jpg" alt="panes rellenos" class="img-modal">
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b Lava las pechugas de pollo con sal y limón. Sécalas con papel absorbente y
           colócalas en un plato o tazón grande. Adoba con consomé en polvo, sal y pimienta. Agrega un poco 
           de salsa inglesa, y las marinamos en el refrigerador por espacio de una hora.</li>
          <li><b>Paso 2:</b>	Vierte 1 ½ taza de agua en el Utensilio de 4 Litros y coloca las pechugas. 
          Tapa el utensilio con la válvula cerrada y cocínalas durante 15 minutos, a fuego medio. Al cabo de 
          ese tiempo, voltéalas y dejas cocinar por otros 15 minutos más.</li>
          <li><b>Paso 3:</b>	Retíralas del utensilio y colócalas en un tazón grande. Reserva 1 ½ taza del caldo 
          que quedó en el utensilio y déjalo entibiar. </li>
          <li><b>Paso 4:</b>	Licúa los tomates, la cebolla, el pimiento, el relajo y el caldo, asegurándote de 
          que este no esté caliente, ya que nos podríamos quemar al encender la licuadora. Retira el resto del caldo 
          que quedó en el Utensilio de 4 Litros, agrega la mezcla licuada y cocina a fuego medio hasta que empiece 
          a hervir, revolviendo de vez en cuando con una espátula.</li>
          <li><b>Paso 5:</b>	Mientras tanto, y con la ayuda del Cuchillo del chef de nuestro Juego de Cuchillos Élite,
           corta las pechugas de pollo en tiritas. Precalienta la Sartén Grande a fuego medio, y agrega el aceite o la
            mantequilla. Coloca las tiritas de pollo y déjalas dorar un poco, aproximadamente 3 minutos por cada lado.</li>
             <li><b>Paso 6:</b	Retíralas de la sartén y agrégalas a la salsa. Mézclala, y deja cocinar durante 3 minutos.
              Añade el vino blanco o el vinagre de manzana, deja cocinar unos 5 minutos y rectifica el sabor de la salsa.
               Si es necesario, agrega un poco de sal y/o pimienta y deja cocinar 3 minutos más. Para darle un sabor más
                rico a la salsa, puedes agregarle aceitunas rellenas y garbanzos cocidos, pero esto es opcional.</li>
          <li><b>Paso 7:</b>	Corta cada pan por la mitad, unta una de las mitades con mayonesa al gusto y cúbrelas con un par 
          de hojas de lechuga y unas ramitas de berro, previamente lavados. Coloca una capa de tomates, pepinos y rábanos, cortados
           en rodajas. Luego, agrega escabeche al gusto y ahora sí, ¡llegó el momento más esperado! Añade el pollo, utilizando la Cuchara
            perforada de nuestro Juego de Cubiertos élite, y con la Cuchara para salsas del mismo juego, agrega salsa al gusto sobre 
            el pollo.</li>
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


/*MODAL RECETA 8 SOPA DE PATA*/
function Abrirmodal8(recetaId) {
  const modal = document.querySelector('.modal8');
  const titulo = document.querySelector('.titulo-receta8');
  const cuerpo = document.querySelector('.receta-info8');

  if (recetaId === 'receta-sopa de pata') {
    titulo.textContent = 'Receta sopa de pata salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>Una pata de res grande</li>
          <li>1 cebolla grande</li>
          <li>3 dientes de ajo</li>
          <li>2 chiles verdes</li>
          <li>2 cucharaditas de achiote</li>
          <li>Hierbas aromaticas</li>
          <li>4 tomates de cocina</li>
          <li>1/2 libra de tripas (opciona)</li>
          <li>1/2 libra de panza (opcional)</li>
          <li>3 guisquiles</li>
           <li>1/2 repollo</li>
          <li>1 yuca grande y 3 pipianes</li>
          <li>3 elotes frescos y un platano verde</li>
        </ul>

        
                <img src="imagenes/Sopa de pata.jpg" alt="sopa de pata" class="img-modal">
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b Lave bien las patas con limon y sal, deje reposar 15 minutos. Vuelva a lavar a que se le quite cualquier mal olor.
          Si este persiste pasaleas por agua hirviendo y dejelas por 15 minutos mas cubiertas con cilantro y otras hiervas aromáticas.</li>
          <li><b>Paso 2:</b>	Pongalas en una olla grande, con agua suficiente. Aparte, licue brevemente los tomates, la cebolla, chile, ajo,
          hierbas, sal, pimienta y achiote.</li>
          <li><b>Paso 3:</b>	Agregue a la olla donde colocó las patas, y ponga a cocinar hasta que la carne de la pata este bien blandita. </li>
          <li><b>Paso 4:</b Cuando este cocinada, saque las pata, deje enfriar, para sacar los nervios de la pata. Regrese todo a la olla, y 
          agregue platano verde, dejelo a su gusto de espeso/corrija el sabor si es necesario y agregue salsa inglesa o soya.</li>
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


/*MODAL RECETA 9 PANES CON POLLO*/
function Abrirmodal9(recetaId) {
  const modal = document.querySelector('.modal9');
  const titulo = document.querySelector('.titulo-receta9');
  const cuerpo = document.querySelector('.receta-info9');

  if (recetaId === 'receta-panes con pollo') {
    titulo.textContent = 'Receta panes con pollo salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>4 pechugas de pollo</li>
          <li>Sazonador en polvo</li>
          <li>1 cucharada de mantequilla o de aceite</li>
          <li>10 tomates, picados en cuatro</li>
           <li>4 a 6 paneles</li>
          <li>½ pimiento verde, picado en cuatro</li>
          <li>Relajo tostado (Laurel, chile guaco seco, chile ciruela, ajonjolí, maní o cacahuate, achiote en polvo, pimienta gorda, clavo de olor, pepitoria, orégano seco, comino y ajo)</li>
          <li>Sal y pimienta</li>
        </ul>

        
                <img src="imagenes/Pan con pollo.jpg" alt="pan con pollo" class="img-modal">
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b >Lava las pechugas de pollo con sal y limón. Sécalas con papel absorbente y colócalas en un plato o recipiente grande. 
          Adoba con consomé en polvo, sal y pimienta. Agrega un poco de salsa inglesa y las marinamos en el refrigerador por espacio de una hora.</li>
          <li><b>Paso 2:</b>	Vierta 1 ½ taza de agua en el Utensilio de 4 Litros y coloque las pechugas. Tapa el utensilio con la válvula cerrada y
           cocínalas durante 15 minutos, a fuego medio. Al cabo de ese tiempo, voltéalas y deja cocinar por otros 15 minutos más. </li>
          <li><b>Paso 3:</b> Retíralas del utensilio y colócalas en un recipiente grande. Reserva 1 ½ taza del caldo que quedó en el utensilio y 
          déjalo entibiar.</li>
           <li><b>Paso 4:</b >Licúa los tomates, la cebolla, el pimiento, el relajo y el caldo, asegurándote de que este no esté caliente, ya que nos 
           podríamos quemar al encender la licuadora. Retira el resto del caldo que quedó en el Utensilio de 4 Litros, agrega la mezcla licuada y cocina a
            fuego medio hasta que empiece a hervir, revolviendo de vez en cuando con una espátula.</li>
          <li><b>Paso 5:</b>	Mientras tanto, y con la ayuda del Cuchillo del chef de nuestro Juego de Cuchillos Élite, corta las pechugas de pollo en tiritas.
           Precalienta la Sartén Grande a fuego medio, y agrega el aceite o la mantequilla. Coloque las tiritas de pollo y déjalas dorar un poco, aproximadamente
            3 minutos por cada lado. </li>
          <li><b>Paso 6:</b> Retíralas de la sartén y agrégalas a la salsa. Mézclala, y deja cocinar durante 3 minutos. Agrega el vino blanco o el vinagre de 
          manzana, deja cocinar unos 5 minutos y rectifica el sabor de la salsa. Si es necesario, agregue un poco de sal y/o pimienta y deje cocinar 3 minutos más.
           Para darle un sabor más rico a la salsa, puedes agregarle aceitunas rellenas y garbanzos cocidos, pero esto es opcional.</li>
           <li><b>Paso 7:</b> Corta cada pan por la mitad, unta una de las mitades con mayonesa al gusto. Luego, agrega escabeche al gusto y ahora sí, ¡llegó el
            momento más esperado! Agregue el pollo, agregue salsa al gusto sobre el pollo.</li>
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



/*MODAL RECETA 10 TAMALES DE ELOTE*/
function Abrirmodal10(recetaId) {
  const modal = document.querySelector('.modal10');
  const titulo = document.querySelector('.titulo-receta10');
  const cuerpo = document.querySelector('.receta-info10');

  if (recetaId === 'receta-tamales de elote') {
    titulo.textContent = 'Receta tamales de elote salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>10 Elotes</li>
          <li>120 gramos de Leche</li>
          <li>60 gramos de Azúcar</li>
          <li>1 cuchara de Sal</li>
          <li>200 gramos de Margarina derretida</li>
        </ul>

        
        <img src="imagenes/Tamales de elote.jpg" alt="tamales de elote" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
         <li><b>Paso 1:</b>	Los granos de elotes se colocan en una licuadora junto con la leche y se mezclan.</li>
          <li><b>Paso 2:</b>	Después se agrega el azúcar, la mantequilla derretida y una cucharada de sal, mezclando 
          todo nuevamente con la licuadora.</li>
          <li><b>Paso 3:</b>	Las tusas de los elotes se utilizan para envolver los tamales. </li>
          <li><b>Paso 4:</b>	Se abren en su totalidad y se coloca dentro de cada una una porción de la mezcla, la
           cantidad necesaria para formar un tamal.</li>
           <li><b>Paso 5:</b>	Se envuelven los tamales doblando la parte inferior para cerrarlos y se refuerzan colocando 
           otra tusa sobre la parte superior, doblando el extremo opuesto de la tusa.</li>
          <li><b>Paso 6:</b>	Para cocinar los tamales, se colocan todos en una olla y se cubren con agua.</li>
          <li><b>Paso 7:</b>	Se ponen a hervir tapados hasta que estén bien cocidos. </li>
          <li><b>Paso 8:</b>	Los tamales se pueden servir con algún aperitivo salvadoreño como salsa de tomate o curtidos.</li>
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



/*MODAL RECETA 11 YUCA FRITA*/
function Abrirmodal11(recetaId) {
  const modal = document.querySelector('.modal11');
  const titulo = document.querySelector('.titulo-receta11');
  const cuerpo = document.querySelector('.receta-info11');

  if (recetaId === 'receta-yuca frita') {
    titulo.textContent = 'Receta yuca frita salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>½ libra de Yuca</li>
          <li>Agua</li>
          <li>1 pizca de Sal</li>
          
        </ul>


        <img src="imagenes/yuca frita.jpg" alt="Yuca frita" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>	Hierve agua con una pizca de sal en una olla grande.</li>
          <li><b>Paso 2:</b>	Pela la yuca, córtala en trozos grandes y cocínala en el agua hirviendo
           por 10 a 15 minutos hasta que esté esponjosa.</li>
          <li><b>Paso 3:</b>	Retira la yuca del agua y córtala en porciones pequeñas, lista para freír si deseas. </li>
          <li><b>Paso 4:</b>	Fríe la yuca en aceite caliente durante 3 a 5 minutos si prefieres disfrutarla frita,
           o sírvela caliente acompañada de otros toppings como chicharrones o salsa de tomate.</li>
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


/*MODAL RECETA 12 PASTELES*/
function Abrirmodal12(recetaId) {
  const modal = document.querySelector('.modal12');
  const titulo = document.querySelector('.titulo-receta12');
  const cuerpo = document.querySelector('.receta-info12');

  if (recetaId === 'receta-pasteles') {
    titulo.textContent = 'Receta de pasteles salvadoreña';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 libra de Harina de maíz</li>
          <li>2 cucharas de Margarina</li>
          <li>1 cuchara de Achiote en polvo</li>
          <li>6 Papas</li>
          <li>4 Zanahorias</li>
          <li>1 Cebolla</li>
          <li>Aceite</li>
          <li>1 pizca de Sal</li>
        </ul>


        <img src="imagenes/Pasteles.jpg" alt="Pasteles" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Preparar la masa mezclando la harina, margarina, achiote y agua hasta obtener 
          una textura suave, luego dejar reposar.</li>
          <li><b>Paso 2:</b> Cocer las papas y zanahorias en agua por 5 minutos y sofreír en cebolla picada en aceite caliente,
           agregando sal y cocinando por 3 minutos.</li>
          <li><b>Paso 3:</b>	Formar los pastelitos colocando una bolita de masa, aplanarla, agregar el relleno, doblar y sellar los bordes. </li>
          <li><b>Paso 4:</b>	Freír los pastelitos en aceite caliente hasta que estén crujientes, escurrir sobre papel absorbente y servir acompañados de curtido.</li>
        </ul>
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

/*MODAL RECETA RECETA 13  PECADO CALZADO*/
function Abrirmodal13(recetaId) {
  const modal = document.querySelector('.modal13');
  const titulo = document.querySelector('.titulo-receta13');
  const cuerpo = document.querySelector('.receta-info13');

  if (recetaId === 'receta-pescado calzado') {
    titulo.textContent = 'Receta de pescado calzado';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>8 o más pescados secos (sin tripas y sin escamas)</li>
          <li>6 huevos</li>
          <li>consomé de Camarón o el que les guste</li>
          li>sal</li>
          <li>4 tomates maduros/li>
          <li>1/2 cebolla pequeña</li>
          li>la mitad de un chile verde</li>
        </ul>


        <img src="imagenes/pescado calzado.jpg" alt="Pescado calzado" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Primero pondremos nuestros pescados secos en agua para que se ablanden y se les
           caiga el exceso de sal por unos 5 o más minutos.</li>
          <li><b>Paso 2:</b> En eso se pone una cacerola a calentar con suficiente aceite.</li>
          <li><b>Paso 3:</b>	En lo que se calienta el aceite.. vamos a separar las yemas de las claras y vamos a batir hasta punto turrón o nieve las claras y 
          cuando ya estén en su punto agregamos las yemas y revolvemos bien.</li>
          <li><b>Paso 4:</b>	Cuando nuestros pescados secos ya hayan votado casi toda la sal los secamos con papel absorbente y llenamos cada pescado con el
           huevo batido (a punto turrón o nieve... y los agregamos al aceite para que se frían por ambos lados y al finalizar con todos los pescados los pondremos
            en un plato en lo que se prepara la salsa.</li>
            <li><b>Paso 5:</b>	Vamos a licuar los tomates,cebolla y chile verde con poquita sal (porque a los pescados les queda sal siempre),agua y licuamos y 
            vertemos la salsa en una olla hasta hervir agregamos consomé de Camarón o el que hayamos elegido y probamos de sabor... no dejar muy sazonada la salsa por los pescados...</li>
          <li><b>Paso 6:</b>	Cuando la salsa ya haya hervido agregamos los pescados envueltos en huevo hasta hervir por unos 5 minutos y se sirve con arroz blanco y ensalada fresca.. provecho</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

  
  modal.style.display = 'block';
}


function cerrarmodal13() {
  const modal = document.querySelector('.modal13');
  modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn13 = document.querySelector('.cerrar13');
  if (cerrarBtn13) {
    cerrarBtn13.addEventListener('click', cerrarmodal13);
  }
});


window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal13');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});


const modalContenido13 = document.querySelector('.modal-contenido13');
let isDragging13 = false;
let offsetX13, offsetY13;

modalContenido13.addEventListener('mousedown', (e) => {
  isDragging13 = true;
  offsetX113 = e.clientX - modalContenido13.offsetLeft;
  offsetY13 = e.clientY - modalContenido13.offsetTop;
  modalContenido13.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging13 = false;
  modalContenido13.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging13) {
    modalContenido13.style.left = `${e.clientX - offsetX13}px`;
    modalContenido13.style.top = `${e.clientY - offsetY13}px`;
    modalContenido13.style.position = 'absolute';
  }
});

      

/*MODAL RECETA 14 ENCHILADAS*/
function Abrirmodal14(recetaId) {
  const modal = document.querySelector('.modal2');
  const titulo = document.querySelector('.titulo-receta2');
  const cuerpo = document.querySelector('.receta-info2');

  // Ejemplo de contenido del modal 2
  if (recetaId === 'receta-enchiladas') {
    titulo.textContent = 'Receta de enchiladas Salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 cucharadas de aceite</li>
          <li>4 tortillas de maíz pequeñas</li>
          <li>1 taza frijoles refritos, calentados</li>
          <li>1 ½ tazas Queso rallado</li>
          <li>1 tomate grande, rebanado</li>
          <li>1 aguacate maduro, pelado, sin semilla y rebanado</li>
          <li>2 huevos duros, pelados y rebanados</li>
        </ul>

        
        <img src="imagenes/Enchiladas.jpg" alt="Enchiladas" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> En un sartén grande, sobre fuego medio- alto, en aceite caliente, cocina las tortillas hasta que estén doradas y crujientes, 
          volteando una a la vez.</li>
          <li><b>Paso 2:</b> En cada tortilla, coloque ¼ taza frijoles refritos. Encima de cada tortilla, coloca ¼ taza Queso rallado, tomate, aguacate, 
          y huevo.</li>
          <li><b>Paso 3:</b>	Sírvala con Queso rallado adicional y si quiere crema picante. </li>
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
function cerrarmodal14() {
  const modal = document.querySelector('.modal14');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 2
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn14 = document.querySelector('.cerrar14');
  if (cerrarBtn14) {
    cerrarBtn14.addEventListener('click', cerrarmodal14);
  }
});

// Cerrar al hacer clic fuera del modal 2
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal14');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 2 SEA MÓVIL ========
const modalContenido14 = document.querySelector('.modal-contenido14');
let isDragging14 = false;
let offsetX14, offsetY14;

modalContenido14.addEventListener('mousedown', (e) => {
  isDragging14 = true;
  offsetX114 = e.clientX - modalContenido14.offsetLeft;
  offsetY14 = e.clientY - modalContenido14.offsetTop;
  modalContenido14.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging14 = false;
  modalContenido14.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging14) {
    modalContenido14.style.left = `${e.clientX - offsetX14}px`;
    modalContenido14.style.top = `${e.clientY - offsetY14}px`;
    modalContenido14.style.position = 'absolute';
  }
});



/*MODAL RECETA 15 CHILAQUILAS*/
function Abrirmodal15(recetaId) {
  const modal = document.querySelector('.modal15');
  const titulo = document.querySelector('.titulo-receta15');
  const cuerpo = document.querySelector('.receta-info15');

  if (recetaId === 'receta-chilaquilas') {
    titulo.textContent = 'Receta de chilaquilas salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>Harina de maíz</li>
          <li>Queso fresco o de su preferencia</li>
          <li>Huevos</li>
          <li>Tomates</li>
          <li>Cebolla</li>
          <li>Chile verde</li>
          <li>Consomé de pollo</li>
          <li>Sal</li>
        </ul>


        <img src="imagenes/Chilaquilas.jpg" alt="Chilaquilas" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Primero hacemos la masa (revolvemos la harina con agua hasta conseguir la masa para las tortillas) hacemos las tortillas un poco gruesas.</li>
          <li><b>Paso 2:</b> Luego que hayamos hecho todas las tortillas que deseamos dejamos enfrianlas, luego cortamos cada tortilla en 2 mitades, seguido cada mitad la 
          abrimos con un cuchillo, dentro de la tortilla agregamos el queso.</li>
          <li><b>Paso 3:</b>	Ahora batimos las claras de huevo hasta punto turrón o nieve, agregamos las yemas de los huevos y un poco de harina para que la mezcla de 
          mantenga más sólida. Pasamos por la mezcla cada mitad de tortilla (con su queso por dentro) una por una.</li>
          <li><b>Paso 4:</b>	Al terminar de envolver todas las mitades de las tortillas en huevo y freírlas, las ponemos en papel absorbente. </li>
          <li><b>Paso 5:</b>	Haremos la salsa, ponemos en la licuadora los tomates, cebolla y chile verde, ahora lo licuamos y seguido ponemos la salsa a hervir, sazonamos bien, 
          seguido cuando la salsa ya esté hirviendo agregamos las chilaquilas (las tortillas con queso envueltas en huevo) en la salsa y dejamos unos 1 o 2 minutos y apagamos, y listo  </li>
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
function cerrarmodal15() {
  const modal = document.querySelector('.modal15');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 3
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn15 = document.querySelector('.cerrar15');
  if (cerrarBtn15) {
    cerrarBtn15.addEventListener('click', cerrarmodal15);
  }
});

// Cerrar al hacer clic fuera del modal 3
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal15');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 3 SEA MÓVIL ========
const modalContenido15 = document.querySelector('.modal-contenido15');
let isDragging15 = false;
let offsetX15, offsetY15;

modalContenido15.addEventListener('mousedown', (e) => {
  isDragging15 = true;
  offsetX15 = e.clientX - modalContenido15.offsetLeft;
  offsetY15 = e.clientY - modalContenido15.offsetTop;
  modalContenido15.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging15 = false;
  modalContenido15.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging15) {
    modalContenido15.style.left = `${e.clientX - offsetX15}px`;
    modalContenido15.style.top = `${e.clientY - offsetY15}px`;
    modalContenido15.style.position = 'absolute';
  }
});


/*MODAL RECETA 16 PASTELES DE PICADILLO*/
function Abrirmodal16(recetaId) {
  const modal = document.querySelector('.modal16');
  const titulo = document.querySelector('.titulo-receta16');
  const cuerpo = document.querySelector('.receta-info16');

  if (recetaId === 'receta-pasteles de picadillo') {
    titulo.textContent = 'Receta pasteles de picadillo';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 paquetes de Cubitos en Polvo con Sabor a Pollo</li>
          <li>2 Hojas de Laurel</li>
          <li>1 cdta de Adobo con Pimienta</li>
          <li>1 pechuga de pollo, deshuesada y sin piel</li>
          <li>½ taza de cebolla</li>
          <li>1 taza de papas cortadas en dados</li>
          <li>1½ tazas de 1 bolsa de Guisantes y Zanahorias</li>
          <li>1 taza de tomates picados</li>
          <li>2½ tazasde Masa</li>
          <li>1 paquete de Sazón con Orégano y ¼ cdta de bicarbonato</li>
        </ul>

        
        <img src="imagenes/pasteles de picadillo.jpg" alt="Pasteles de picadillo" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Poner 5 tazas de agua en un recipiente de tamaño mediano a fuego medio-alto con 1 sobre del consomé de pollo, las hojas de laurel y 1/2 cdta 
          de Adobo. </li>
          <li><b>Paso 2:</b> Dejar que hierva, añadir el pollo y dejar que vuelva a hervir. Bajar el fuego y cocinar a fuego lento de 12 a 15 minutos, removiendo de vez en cuando, o hasta que el pollo quede bien hecho.</li>
          <li><b>Paso 3:</b>	Pasar el pollo a una tabla de cortar (reservando el líquido) y dejar que se enfríe un poco. Desmenuzar el pollo con la ayuda de 2 tenedores.</li>
          <li><b>Paso 4:</b>	Añadir 2 cdas. de aceite en un sartén grande a fuego medio. Incorporar la cebolla y cocinar por 2 o 3 minutos, o hasta que se ablande, removiendo de vez en cuando. Añadir las papas con 1/4 de taza
           del líquido reservado y cocinar de 8 a 10 minutos, o hasta que queden tiernas, removiendo de vez en cuando. </li>
           <li><b>Paso 5:</b>	Incorporar los guisantes y las zanahorias, los tomates, y cocinar de 3 a 5 minutos, o hasta que las verduras queden tiernas y crujientes, removiendo de vez en cuando. Añadir el pollo y 2 cdas más
            del líquido reservado; remover para combinar, y luego retirar del fuego.</li>
          <li><b>Paso 6:</b>	Mientras tanto en un recipiente de tamaño mediano, combinar la Masarepa con el sobre de consomé de pollo restante, el sazón, el bicarbonato y el Adobo restante. Incorporar poco a poco 2 tazas y media 
          del líquido reservado y 1 cda. de aceite para formar una masa blanda. Amasar por 5 minutos, o hasta que la masa quede suave. </li>
          <li><b>Paso 7:</b>	Dividir la masa en 12 bolitas del mismo tamaño. Aplastar las bolitas con las manos mojadas para formar discos de 5 pulgadas y colocarlos lado a lado en la superficie de trabajo, o en una bandeja para 
          hornear. Repartir el preparado a base de pollo entre los discos en porciones de igual tamaño y doblar por la mitad, presionar los bordes para sellarlos y contener el relleno.</li>
          <li><b>Paso 8:</b>	Calentar el aceite restante en un sartén grande y hondo a fuego medio a 350°F, o hasta que comience a hervir. Freír los pastelillos de 3 a 5 minutos en tandas para evitar que se amontonen, dándoles
           la vuelta una vez, o hasta que se doren y queden crujientes. Pasar a un plato forrado con papel de cocina para absorber la grasa. Servir con Curtido Salvadoreño. </li>
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
function cerrarmodal16() {
  const modal = document.querySelector('.modal16');
  modal.style.display = 'none';
}

// Cerrar con la “X” modal 2
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn16 = document.querySelector('.cerrar16');
  if (cerrarBtn16) {
    cerrarBtn16.addEventListener('click', cerrarmodal16);
  }
});

// Cerrar al hacer clic fuera del modal 2
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal16');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// ======== HACER QUE EL MODAL 2 SEA MÓVIL ========
const modalContenido16 = document.querySelector('.modal-contenido16');
let isDragging16 = false;
let offsetX16, offset16;

modalContenido2.addEventListener('mousedown', (e) => {
  isDragging16 = true;
  offsetX16 = e.clientX - modalContenido16.offsetLeft;
  offsetY16 = e.clientY - modalContenido16.offsetTop;
  modalContenido16.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging16 = false;
  modalContenido16.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging16) {
    modalContenido16.style.left = `${e.clientX - offsetX16}px`;
    modalContenido16.style.top = `${e.clientY - offsetY16}px`;
    modalContenido16.style.position = 'absolute';
  }
});



/*MODAL RECETA 17 POLLO GUISADO*/
function Abrirmodal17(recetaId) {
  const modal = document.querySelector('.modal17');
  const titulo = document.querySelector('.titulo-receta17');
  const cuerpo = document.querySelector('.receta-info17');

  if (recetaId === 'receta-pollo guisado') {
    titulo.textContent = 'Receta pollo guisado';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 kg de pollo (pierna, muslo o pechuga)</li>
          <li>Jugo de 1 limón (para lavar)</li>
          <li>Condimentos: sal de ajo, comino molido, sal de cebolla,
           salsa Worcestershire, mostaza, sal, consomé de pollo (todo al gusto)</li>
          <li>5 tomates, ½ cebolla, 1 chile verde o rojo, orégano</li>
          <li>3 papas, 1 zanahoria (peladas y en trozos)</li>
        </ul>


        <img src="imagenes/pollo guisado.jpg" alt="Pollo guisado" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>Lava bien el pollo con limón y quita la piel.</li>
          <li><b>Paso 2:</b> Coloca el pollo crudo en un sartén. Agrega todos los condimentos al gusto. Mezcla bien, tapa y cocina a fuego lento por 30 minutos.</li>
          <li><b>Paso 3:</b>	Licúa los tomates, cebolla, chile, comino y orégano hasta hacer una salsa.</li>
          <li><b>Paso 4:</b>	Agrega la salsa al pollo cocido. Añade papas y zanahoria.</li>
          <li><b>Paso 5:</b>	Cocina todo junto por 10 a 15 minutos más, hasta que las verduras estén suaves.</li>
        </ul>
      </div>
    `;
  } else {
    titulo.textContent = 'Receta';
    cuerpo.innerHTML = '<p>Contenido de la receta...</p>';
  }

 
  modal.style.display = 'block';
}


function cerrarmodal17() {
  const modal = document.querySelector('.modal17');
  modal.style.display = 'none';
}


document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn17 = document.querySelector('.cerrar17');
  if (cerrarBtn17) {
    cerrarBtn17.addEventListener('click', cerrarmodal17);
  }
});

// Cerrar al hacer clic fuera del modal 3
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal17');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

const modalContenido17 = document.querySelector('.modal-contenido17');
let isDragging17 = false;
let offsetX17, offsetY17;

modalContenido17.addEventListener('mousedown', (e) => {
  isDragging17 = true;
  offsetX17 = e.clientX - modalContenido17.offsetLeft;
  offsetY17 = e.clientY - modalContenido17.offsetTop;
  modalContenido17.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging17 = false;
  modalContenido17.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging17) {
    modalContenido17.style.left = `${e.clientX - offsetX17}px`;
    modalContenido17.style.top = `${e.clientY - offsetY17}px`;
    modalContenido17.style.position = 'absolute';
  }
});


/*MODAL RECETA 18 PUPUSAS DE SOYA*/
function Abrirmodal18(recetaId) {
  const modal = document.querySelector('.modal18');
  const titulo = document.querySelector('.titulo-receta18');
  const cuerpo = document.querySelector('.receta-info18');

  if (recetaId === 'receta-pupusas de soya') {
    titulo.textContent = 'Receta pupusas de soya salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1/2 lb Carne de soya preparada</li>
          <li>1 lb Harina de maíz</li>
          <li>1 bt Aceite</li>
          <li>1 lb Quesillo</li>
          <li>1 bt Curtido</li>
          <li>1 bt Salsa de tomate</li>
        </ul>

        
        <img src="imagenes/pupusas de soya.jpg" alt="pupusas de soya" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Primero preparamos la carne de soya..</li>
          <li><b>Paso 2:</b> Luego preparamos la harina de maíz con agua de tiempo y 1 cucharadita de sal amasamos y la ponemos en un recipiente donde estaremos dispensado
          en otro recipiente pondremos una buena cantidad de aceite para agregar ala manipulación de la masa... junto a la carne de soya y el quesillo amasado.</li>
          <li><b>Paso 3:</b>	Elaboramos la pupusa.</li>
          <li><b>Paso 4:</b>	Seguimos... cogemos un poco de aceite para dar mejor forma ala pupusa y no se pegue ni en la mano ni en la plancha.</li>
          <li><b>Paso 4:</b>	Y seguimos.... darle una cocción uniforme a ambos lados en la plancha previamente caliente.</li>
          <li><b>Paso 4:</b>	Luego servimos con curtido y salsa de tomate.</li>
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
function cerrarmodal18() {
  const modal = document.querySelector('.modal18');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn18 = document.querySelector('.cerrar18');
  if (cerrarBtn18) {
    cerrarBtn18.addEventListener('click', cerrarmodal18);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal18');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido18 = document.querySelector('.modal-contenido18');
let isDragging18 = false;
let offsetX18, offsetY18;

modalContenido5.addEventListener('mousedown', (e) => {
  isDragging18 = true;
  offsetX18 = e.clientX - modalContenido18.offsetLeft;
  offsetY18 = e.clientY - modalContenido18.offsetTop;
  modalContenido18.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging18 = false;
  modalContenido18.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging18) {
    modalContenido18.style.left = `${e.clientX - offsetX18}px`;
    modalContenido18.style.top = `${e.clientY - offsetY18}px`;
    modalContenido18.style.position = 'absolute';
  }
});



/*MODAL RECETA 19 RELLENOS DE COLIFLOR*/
function Abrirmodal19(recetaId) {
  const modal = document.querySelector('.modal19');
  const titulo = document.querySelector('.titulo-receta19');
  const cuerpo = document.querySelector('.receta-info19');

  if (recetaId === 'receta-rellenos de coliflor') {
    titulo.textContent = 'Receta de rellenos de coliflor salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 coliflor de cabeza mediana, cortada en floretes del tamaño de un bocado</li>
          <li>3-4 huevos grandes, separados </li>
          <li>1 cucharadita de harina</li>
          <li>Aceite vegetal para freír, suficiente para cubrir los trozos de coliflor.</li>
          <li>1 taza de agua</li>
          <li>1/2 cebolla pequeña, finamente picada </li>
          <li>1 chile verde, finamente picado</li>
          <li>3 tomates medianos, cortados en cubitos</li>
          <li>1/2 cucharada de caldo de verduras en polvo</li>
          <li>sal al gusto </li>
        </ul>


        <img src="imagenes/Rellenos de coliflor.jpg" alt="Rellenos de coliflor" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> En una olla grande, hierva la coliflor hasta que esté tierna, aproximadamente 2 minutos. Retirar y escurrir.</li>
          <li><b>Paso 2:</b> Batir las claras hasta que se formen picos rígidos. Agregue harina a las yemas de huevo y mezcle hasta que estén 
          mezclados. En un tazón grande, incorpora las claras a la mezcla de yemas. Agrega la coliflor y cúbrela por completo.</li>
          <li><b>Paso 3:</b>	En una olla grande a fuego medio-alto, calienta el aceite vegetal hasta que esté muy caliente. Añade los trozos de coliflor 
          rebozados y sofríe hasta que estén dorados por todos lados. Retirar y reservar.</li>
          <li><b>Paso 4:</b>	En una olla grande, agregue el agua, los tomates, el chile y la cebolla y revuelva para combinar. Agrega el caldo de verduras 
          en polvo. Calentar a fuego lento. Agrega la coliflor y continúa cocinando a fuego lento durante 3 minutos. Agrega sal al gusto. Servir inmediatamente.</li>
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
function cerrarmodal19() {
  const modal = document.querySelector('.modal19');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn19 = document.querySelector('.cerrar19');
  if (cerrarBtn19) {
    cerrarBtn19.addEventListener('click', cerrarmodal19);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal19');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido19 = document.querySelector('.modal-contenido19');
let isDragging19 = false;
let offsetX19, offsetY19;

modalContenido7.addEventListener('mousedown', (e) => {
  isDragging19 = true;
  offsetX19 = e.clientX - modalContenido19.offsetLeft;
  offsetY19 = e.clientY - modalContenido19.offsetTop;
  modalContenido19.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging19 = false;
  modalContenido19.style.cursor = 'default';
});8

window.addEventListener('mousemove', (e) => {
  if (isDragging19) {
    modalContenido19.style.left = `${e.clientX - offsetX19}px`;
    modalContenido19.style.top = `${e.clientY - offsetY19}px`;
    modalContenido19.style.position = 'absolute';
  }
});


/*MODAL RECETA  20 POLLO ENCEBOLLADO*/
function Abrirmodal20(recetaId) {
  const modal = document.querySelector('.modal20');
  const titulo = document.querySelector('.titulo-receta20');
  const cuerpo = document.querySelector('.receta-info20');

  if (recetaId === 'receta-pollo encebollado') {
    titulo.textContent = 'Receta pollo encebollado';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 Pollo entero cortado en ocho piezas</li>
          <li>3 Cebollas grandes partidas en rodajas</li>
          <li>1 Diente de ajo finamente picado</li>
          <li>3 cucharas de Salsa inglesa</li>
          <li>1 cucharilla de Mostaza</li>
          <li>1 taza de Agua</li>
          <li>Aceite</li>
        </ul>

        
        <img src="imagenes/Pollo encebollado.jpg" alt="Pollo encebollado" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Dora las piezas de pollo en una cacerola grande con aceite a fuego medio-alto hasta que estén doradas</li>
          <li><b>Paso 2:</b> Agrega el ajo y cocina por unos minutos, luego incorpora el agua, sal y deja hervir hasta que el pollo esté tierno.</li>
          <li><b>Paso 3:</b>	Añade la salsa inglesa, la mostaza y la cebolla, cocinando a fuego lento hasta que la cebolla esté suave pero firme.</li>
          <li><b>Paso 4:</b>	Sirve el pollo encebollado y a disfrutar</li>
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
function cerrarmodal20() {
  const modal = document.querySelector('.modal20');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn20 = document.querySelector('.cerrar20');;
  if (cerrarBtn20) {
    cerrarBtn20.addEventListener('click', cerrarmodal20);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal20');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido20 = document.querySelector('.modal-contenido20');
let isDragging20 = false;
let offsetX20, offsetY20;

modalContenido8.addEventListener('mousedown', (e) => {
  isDragging20 = true;
  offsetX20 = e.clientX - modalContenido20.offsetLeft;
  offsetY20 = e.clientY - modalContenido20.offsetTop;
  modalContenido20.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging20 = false;
  modalContenido20.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging20) {
    modalContenido20.style.left = `${e.clientX - offsetX20}px`;
    modalContenido20.style.top = `${e.clientY - offsetY20}px`;
    modalContenido20.style.position = 'absolute';
  }
});


/*MODAL RECETA 21  CHILES RELLENOS*/
function Abrirmodal21(recetaId) {
  const modal = document.querySelector('.modal21');
  const titulo = document.querySelector('.titulo-receta21');
  const cuerpo = document.querySelector('.receta-info21');

  if (recetaId === 'receta-chiles rellenos') {
    titulo.textContent = 'Receta chiles rellenos salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>6 chiles verdes grandes</li>
          <li>250 g de carne molida</li>
          <li>1 papa y 1 zanahoria picada</li>
          <li>1/2 tomate, 1/4 cebolla y 1 ajo picado</li>
          <li>3 huevos</li>
          <li>Harina, aceite, sal o consomé al gusto</li>
        </ul>

        
        <img src="imagenes/Chiles rellenos.jpg" alt="chiles rellenos" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Asa y pela los chiles quitales las semillas.</li>
          <li><b>Paso 2:</b> Sofríe cebolla y ajo, agrega carne, tomate, papa y zanahoria. cocina y sazona.</li>
          <li><b>Paso 3:</b>	Bate claras a punto de nieve, añade yemas, pasa los ciles pr harina y luego por el huevo.</li>
          <li><b>Paso 4:</b>	Licúa tomate, cebolla, ajo y cilantro, sofrie y vierte sobre los chiles.</li>
           <li><b>Paso 5:</b> Y listo a servir.</li>
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
function cerrarmodal21() {
  const modal = document.querySelector('.modal21');
  modal.style.display = 'none';
}

/*CERRAR MODAL CON "X"*/
document.addEventListener('DOMContentLoaded', () => {
  const cerrarBtn21 = document.querySelector('.cerrar21');
  if (cerrarBtn21) {
    cerrarBtn21.addEventListener('click', cerrarmodal21);
  }
});

/*CERRAR AL HACER CLIC FUERA DEL MODAL*/
window.addEventListener('click', (e) => {
  const modal = document.querySelector('.modal21');
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

/*HACE QUE EL MODAL SEA MOVIL*/
const modalContenido21 = document.querySelector('.modal-contenido21');
let isDragging21 = false;
let offsetX21, offsetY21;

modalContenido21.addEventListener('mousedown', (e) => {
  isDragging21 = true;
  offsetX21 = e.clientX - modalContenido21.offsetLeft;
  offsetY21 = e.clientY - modalContenido21.offsetTop;
  modalContenido21.style.cursor = 'grabbing';
});

window.addEventListener('mouseup', () => {
  isDragging21 = false;
  modalContenido21.style.cursor = 'default';
});

window.addEventListener('mousemove', (e) => {
  if (isDragging21) {
    modalContenido21.style.left = `${e.clientX - offsetX21}px`;
    modalContenido21.style.top = `${e.clientY - offsetY21}px`;
    modalContenido21.style.position = 'absolute';
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

