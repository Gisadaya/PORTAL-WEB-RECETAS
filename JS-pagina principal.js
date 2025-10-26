// --- FILTRO DE BÚSQUEDA ---
document.addEventListener("DOMContentLoaded", () => {
  const buscar = document.getElementById("buscar");
  const recetas = document.querySelectorAll(".recetas-destacadas");

  buscar.addEventListener("keyup", function() {
    const texto = this.value.toLowerCase();
    let coincidencias = 0;

    recetas.forEach(receta => {
      const titulo = receta.querySelector("h3").textContent.toLowerCase();
      const descripcion = receta.querySelector("p").textContent.toLowerCase();

      if (titulo.includes(texto) || descripcion.includes(texto)) {
        receta.style.display = "block";
        coincidencias++;
      } else {
        receta.style.display = "none";
      }
    });
  });
});

// --- MODAL LOGIN ---
const modal = document.getElementById("modal-login");
const abrir = document.getElementById("abrir-login");
const cerrar = document.querySelector(".cerrar");

abrir.onclick = () => {
  modal.style.display = "block";
};

cerrar.onclick = () => {
  modal.style.display = "none";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};