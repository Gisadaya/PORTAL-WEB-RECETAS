// === VARIABLES ===
const formularioReceta = document.getElementById("form-agregar-receta");
const inputImagen = document.getElementById("imagen-receta");
const contenedorVistaPrevia = document.getElementById("vista-previa");
const mensajeExito = document.getElementById("mensaje-exito");

// === MOSTRAR VISTA PREVIA DE IMAGEN ===
inputImagen.addEventListener("change", (evento) => {
  const archivo = evento.target.files[0];
  if (!archivo) return;

  const lector = new FileReader();
  lector.onload = (e) => {
    contenedorVistaPrevia.innerHTML = `<img src="${e.target.result}" alt="Vista previa">`;
  };
  lector.readAsDataURL(archivo);
});

// === GUARDAR RECETA ===
formularioReceta.addEventListener("submit", (evento) => {
  evento.preventDefault();

  // Obtener valores de los campos
  const titulo = document.getElementById("titulo-receta").value.trim();
  const categoria = document.getElementById("categoria-receta").value;
  const descripcion = document.getElementById("descripcion-receta").value.trim();
  const ingredientes = document.getElementById("ingredientes-receta").value.trim();
  const pasos = document.getElementById("pasos-receta").value.trim();

  // Validación básica
  if (!titulo || !categoria || !descripcion || !ingredientes || !pasos) {
    alert("Por favor, completa todos los campos.");
    return;
  }

  const archivoImagen = inputImagen.files[0];
  let imagenBase64 = "";

  // Si el usuario agregó una imagen
  if (archivoImagen) {
    const lector = new FileReader();
    lector.onload = (e) => {
      imagenBase64 = e.target.result;
      guardarReceta(imagenBase64);
    };
    lector.readAsDataURL(archivoImagen);
  } else {
    guardarReceta(imagenBase64);
  }
});


function guardarReceta(imagenBase64) {
  const nuevaReceta = {
    titulo: document.getElementById("titulo-receta").value.trim(),
    categoria: document.getElementById("categoria-receta").value,
    descripcion: document.getElementById("descripcion-receta").value.trim(),
    ingredientes: document.getElementById("ingredientes-receta").value.trim(),
    pasos: document.getElementById("pasos-receta").value.trim(),
    imagen: imagenBase64,
    fechaCreacion: new Date().toISOString(),
  };

  const recetasGuardadas = JSON.parse(localStorage.getItem("recetas_foodware") || "[]");
  recetasGuardadas.push(nuevaReceta);
  localStorage.setItem("recetas_foodware", JSON.stringify(recetasGuardadas));

  // Mostrar mensaje y limpiar formulario
  mensajeExito.style.display = "block";
  formularioReceta.reset();
  contenedorVistaPrevia.innerHTML = "";

  setTimeout(() => {
    mensajeExito.style.display = "none";
  }, 3000);
}