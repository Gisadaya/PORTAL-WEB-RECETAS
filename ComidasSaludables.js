
// Menú desplegable
  const menuToggle = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');
  const dropdown = document.querySelector('.menu-desplegable');

  menuToggle.addEventListener('click', () => {
    menuList.classList.toggle('active');
  });

  dropdown.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.classList.toggle('active');
  });


// Efecto de "Me gusta"
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

// Efecto de "Ver más"
const verMasSalud = document.querySelectorAll('.salud-vermas');

verMasSalud.forEach(boton => {
  boton.addEventListener('click', () => {
    alert("✨ Próximamente verás la receta completa 🍽️");
  });
});



// ======== MODAL 1 - PUPUSAS DE MORA ========
function Abrirmodal(recetaId) {
  const modal = document.querySelector('.modal');
  const titulo = document.querySelector('.titulo-receta');
  const cuerpo = document.querySelector('.receta-info');

  if (recetaId === 'receta-pupusasMora') {
    titulo.textContent = 'Receta de Pupusas de Mora Salvadoreñas';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 tazas de masa integral de maíz</li>
          <li>1/2 taza de moras frescas</li>
          <li>2 cdas de requesón bajo en grasa</li>
          <li>1 cda de miel (opcional)</li>
          <li>Agua (para formar la masa)</li>
        </ul>
        <img src="imagenes/Pupusas.jpg" alt="pupusas" class="img-modal">
      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Mezclar la masa integral con un poco de agua hasta obtener una masa suave.</li>
          <li><b>Paso 2:</b> Aplastar pequeñas porciones de masa en círculos de 10cm.</li>
          <li><b>Paso 3:</b> Mezclar las moras con el requesón y la miel.</li>
          <li><b>Paso 4:</b> Colocar una cucharada del relleno en el centro de cada círculo.</li>
          <li><b>Paso 5:</b> Cerrar y formar la pupusa.</li>
          <li><b>Paso 6:</b> Cocinar en comal antiadherente 3-4 min por cada lado.</li>
        </ul>
      </div>`;
  }

  modal.style.display = 'block';
}

function cerrarmodal() {
  document.querySelector('.modal').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar, .modal')) cerrarmodal();
});
dragModal('.modal-contenido');

// ======== MODAL 2 - PESCADO ASADO ========
function Abrirmodal2(recetaId) {
  const modal = document.querySelector('.modal2');
  const titulo = document.querySelector('.titulo-receta2');
  const cuerpo = document.querySelector('.receta-info2');

  if (recetaId === 'receta-PescadoAsado') {
    titulo.textContent = 'Receta de Pescado Asado Salvadoreño';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 filetes de pescado</li>
          <li>1 diente de ajo picado</li>
          <li>Jugo de limón</li>
          <li>1 cdita de aceite de oliva</li>
          <li>Sal y pimienta al gusto</li>
          <li>Cilantro fresco y rodajas de tomate</li>
        </ul>
        <img src="imagenes/PescadoAsado.jpg" alt="Pescado asado" class="img-modal">
      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Mezclar ajo, limón, aceite, sal y pimienta.</li>
          <li><b>Paso 2:</b> Marinar los filetes 15 min.</li>
          <li><b>Paso 3:</b> Asar en comal 4-5 min por lado.</li>
          <li><b>Paso 4:</b> Servir con cilantro y tomate.</li>
        </ul>
      </div>`;
  }

  modal.style.display = 'block';
}

function cerrarmodal2() {
  document.querySelector('.modal2').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar2, .modal2')) cerrarmodal2();
});
dragModal('.modal-contenido2');

// ======== MODAL 3 - SALPICÓN DE RES ========
function Abrirmodal3(recetaId) {
  const modal = document.querySelector('.modal3');
  const titulo = document.querySelector('.titulo-receta3');
  const cuerpo = document.querySelector('.receta-info3');

  if (recetaId === 'receta-Salpicon') {
    titulo.textContent = 'Receta de Salpicón de Res';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>300g carne de res cocida y deshebrada</li>
          <li>1 tomate picado</li>
          <li>1/2 cebolla morada</li>
          <li>1/2 taza pepino picado</li>
          <li>1/4 taza zanahoria rallada</li>
          <li>Jugo de limón, aceite, sal y pimienta</li>
        </ul>
        <img src="imagenes/Salpicon.jpg" alt="Salpicon de res" class="img-modal">
      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li>Mezclar vegetales y carne.</li>
          <li>Agregar limón, aceite, sal y pimienta.</li>
          <li>Servir frío con tortilla o pan.</li>
        </ul>
      </div>`;
  }

  modal.style.display = 'block';
}

function cerrarmodal3() {
  document.querySelector('.modal3').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar3, .modal3')) cerrarmodal3();
});
dragModal('.modal-contenido3');

// ======== MODAL 4 - SÁNDWICH DE VERDURAS ========
function Abrirmodal4(recetaId) {
  const modal = document.querySelector('.modal4');
  const titulo = document.querySelector('.titulo-receta4');
  const cuerpo = document.querySelector('.receta-info4');

  if (recetaId === 'receta-sandwich') {
    titulo.textContent = 'Sándwich de Verduras Saludable';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>2 rebanadas de pan integral</li>
          <li>1/4 aguacate</li>
          <li>2 hojas de lechuga</li>
          <li>2 rodajas de tomate</li>
          <li>60g de pollo cocido</li>
          <li>Mostaza o yogur natural</li>
        </ul>
      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li>Untar mostaza o yogur en el pan.</li>
          <li>Agregar pollo y verduras.</li>
          <li>Cerrar y cortar en mitades.</li>
        </ul>
        <img src="imagenes/SandwichVerduras.jpg" class="img-modal">
      </div>`;
  }

  modal.style.display = 'block';
}

function cerrarmodal4() {
  document.querySelector('.modal4').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar4, .modal4')) cerrarmodal4();
});
dragModal('.modal-contenido4');

// ======== MODAL 5 - ARROZ CON LECHE DESCREMADA ========
function Abrirmodal5(recetaId) {
  const modal = document.querySelector('.modal5');
  const titulo = document.querySelector('.titulo-receta5');
  const cuerpo = document.querySelector('.receta-info5');

  if (recetaId === 'receta-ArrozConLecheDescremada') {
    titulo.textContent = 'Arroz con Leche Descremada';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <ul>
          <li>1/2 taza de arroz</li>
          <li>2 tazas de leche descremada</li>
          <li>1/2 taza de agua</li>
          <li>1 raja de canela</li>
          <li>1 cdita de miel o stevia</li>
        </ul>
      </div>
      <div class="preparacion">
        <ul>
          <li>Cocinar el arroz con agua y canela.</li>
          <li>Agregar leche y endulzar.</li>
          <li>Cocinar a fuego bajo 10 min.</li>
        </ul>
        <img src="imagenes/ArrozLecheDescreamada.png" class="img-modal">
      </div>`;
  }

  modal.style.display = 'block';
}
function cerrarmodal5() {
  document.querySelector('.modal5').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar5, .modal5')) cerrarmodal5();
});
dragModal('.modal-contenido5');

// ======== MODAL 6 - PLÁTANOS AL VAPOR ========
function Abrirmodal6(recetaId) {
  const modal = document.querySelector('.modal6');
  const titulo = document.querySelector('.titulo-receta6');
  const cuerpo = document.querySelector('.receta-info6');

  if (recetaId === 'receta-PlatanosVapor') {
    titulo.textContent = 'Plátanos al Vapor';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <ul>
          <li>1 plátano maduro</li>
          <li>Canela al gusto</li>
        </ul>
        <img src="imagenes/PlatanosVapor.png" class="img-modal">
      </div>
      <div class="preparacion">
        <ul>
          <li>Pelar y cortar el plátano.</li>
          <li>Cocer al vapor 10-12 min.</li>
          <li>Espolvorear con canela.</li>
        </ul>
      </div>`;
  }

  modal.style.display = 'block';
}
function cerrarmodal6() {
  document.querySelector('.modal6').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar6, .modal6')) cerrarmodal6();
});
dragModal('.modal-contenido6');

// ======== MODAL 7 - YUCA SANCOCHADA ========
function Abrirmodal7(recetaId) {
  const modal = document.querySelector('.modal7');
  const titulo = document.querySelector('.titulo-receta7');
  const cuerpo = document.querySelector('.receta-info7');

  if (recetaId === 'receta-Yusancochada') {
    titulo.textContent = 'Yuca Sancochada';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <ul>
          <li>1 yuca mediana</li>
          <li>Agua y sal al gusto</li>
        </ul>
        <img src="imagenes/YucaSancochada.png" class="img-modal">
      </div>
      <div class="preparacion">
        <ul>
          <li>Hervir agua con sal.</li>
          <li>Agregar la yuca y cocinar 25 min.</li>
          <li>Escurrir y servir caliente.</li>
        </ul>
      </div>`;
  }

  modal.style.display = 'block';
}
function cerrarmodal7() {
  document.querySelector('.modal7').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar7, .modal7')) cerrarmodal7();
});
dragModal('.modal-contenido7');

// ======== MODAL 8 - NUEGADOS HORNEADOS ========
function Abrirmodal8(recetaId) {
  const modal = document.querySelector('.modal8');
  const titulo = document.querySelector('.titulo-receta8');
  const cuerpo = document.querySelector('.receta-info8');

  if (recetaId === 'receta-NueHorneados') {
    titulo.textContent = 'Nuegados Horneados';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <ul>
          <li>1 taza de yuca rallada</li>
          <li>1 huevo</li>
          <li>2 cdas de miel</li>
          <li>2 cdas de harina integral</li>
          <li>1/4 cdita de canela</li>
        </ul>
      </div>
      <div class="preparacion">
        <ul>
          <li>Precalentar horno a 180°C.</li>
          <li>Mezclar ingredientes y formar bolitas.</li>
          <li>Hornear 20-25 min.</li>
        </ul>
        <img src="imagenes/Nuegados-_horneados.png" class="img-modal">
      </div>`;
  }

  modal.style.display = 'block';
}
function cerrarmodal8() {
  document.querySelector('.modal8').style.display = 'none';
}
document.addEventListener('click', e => {
  if (e.target.matches('.cerrar8, .modal8')) cerrarmodal8();
});
dragModal('.modal-contenido8');

// ======== FUNCIÓN GLOBAL PARA HACER CUALQUIER MODAL MÓVIL ========
function dragModal(selector) {
  const modalContenido = document.querySelector(selector);
  if (!modalContenido) return;
  let isDragging = false, offsetX = 0, offsetY = 0;

  modalContenido.addEventListener('mousedown', e => {
    isDragging = true;
    offsetX = e.clientX - modalContenido.offsetLeft;
    offsetY = e.clientY - modalContenido.offsetTop;
    modalContenido.style.cursor = 'grabbing';
  });

  window.addEventListener('mouseup', () => {
    isDragging = false;
    modalContenido.style.cursor = 'default';
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    modalContenido.style.left = `${e.clientX - offsetX}px`;
    modalContenido.style.top = `${e.clientY - offsetY}px`;
    modalContenido.style.position = 'absolute';
  });
}


/*MODAL RECETA 9 CHILATE*/
function Abrirmodal9(recetaId) {
  const modal = document.querySelector('.modal9');
  const titulo = document.querySelector('.titulo-receta9');
  const cuerpo = document.querySelector('.receta-info9');

  if (recetaId === 'receta-chilate') {
    titulo.textContent = 'Receta Chilate Salvadoreño';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1/2 taza de masa de maíz disulta en 2 tazas de agua</li>
          <li>1 raja de canela</li>
          <li>1 trocito de jengibre</li>
          <li>1 cda de miel o stevia al gusto</li>
           
        </ul>

        
                <img src="imagenes/Chilate.png" alt="chilate" class="img-modal">
            </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b >En una olla, calentar el agua con la canela y el jengibre.</li>
          <li><b>Paso 2:</b>	Agregar la masa disuelta y mover constantemente para evitar grumos. </li>
          <li><b>Paso 3:</b> Cocinar 10-15 minutos hasta que espese.</li>
           <li><b>Paso 4:</b >Endulzar con miel.</li>
        
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



/*MODAL RECETA 10 HORCHATA DE MORRO*/
function Abrirmodal10(recetaId) {
  const modal = document.querySelector('.modal10');
  const titulo = document.querySelector('.titulo-receta10');
  const cuerpo = document.querySelector('.receta-info10');

  if (recetaId === 'receta-morro') {
    titulo.textContent = 'Receta tamales de elote salvadoreños';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>3 cdas de mezcla natural de morro tostado (sin azúcar)</li>
          <li>2 tazas de agua</li>
          <li>1 taza de leche descremada</li>
          <li>1 cdita de miel o stevia</li>
          <li>Canela al gusto</li>
        </ul>

        
        <img src="imagenes/HorchataMorro.png" alt="horchataMorro" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
         <li><b>Paso 1:</b>	Licuar la mezcla de morro con el agua y la leche.</li>
          <li><b>Paso 2:</b>	Colar bien.</li>
          <li><b>Paso 3:</b>	Endulzar con miel o stevia y añadir canela. </li>
          <li><b>Paso 4:</b>	Servir fría.</li>
           
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



/*MODAL RECETA 11 FRESCO DE CHAN CON LIMÓN*/
function Abrirmodal11(recetaId) {
  const modal = document.querySelector('.modal11');
  const titulo = document.querySelector('.titulo-receta11');
  const cuerpo = document.querySelector('.receta-info11');

  if (recetaId === 'receta-ChanLimon') {
    titulo.textContent = 'Receta Fresco de chan con limón';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>1 cda de semillas de chan</li>
          <li>Jugo de 2 limones</li>
          <li>500ml de agua</li>
          <li>Stevia o miel al gusto</li>
          
        </ul>


        <img src="imagenes/YucaSancochada.png" alt="Yuca frita" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b>	Remojar las semillas de chan durante 5-10 minutos hasta que se
          hidraten.</li>
          <li><b>Paso 2:</b>	Agregar el jugo de limón y endulzante.</li>
          <li><b>Paso 3:</b>	Revolver y servir con hielo. </li>
          
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


/*MODAL RECETA 12 FRESCO DE MARAÑON*/
function Abrirmodal12(recetaId) {
  const modal = document.querySelector('.modal12');
  const titulo = document.querySelector('.titulo-receta12');
  const cuerpo = document.querySelector('.receta-info12');

  if (recetaId === 'receta-Marañon') {
    titulo.textContent = 'Receta Fresco de marañon';
    cuerpo.innerHTML = `
      <div class="ingredientes">
        <h3>Ingredientes</h3>
        <ul>
          <li>3 marañones maduros (solo la fruta sin semilla)</li>
          <li>2 tazas de agua</li>
          <li>Jugo de 1/2 limón</li>
          <li>Stevia o miel al gusto</li>
        </ul>


        <img src="imagenes/marañon.png" alt="frecoMarañon" class="img-modal">
    </div>

      </div>
      <div class="preparacion">
        <h3>Preparación</h3>
        <ul>
          <li><b>Paso 1:</b> Lavar y trocear los marañones.</li>
          <li><b>Paso 2:</b> Licuar con el agua y el jugo de limón.</li>
          <li><b>Paso 3:</b>	Colar y endulzar al gusto. </li>
          <li><b>Paso 4:</b>	Servir bien frío.</li>
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
