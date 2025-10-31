document.addEventListener('DOMContentLoaded', () => {
  const openLogin = document.getElementById('open-login');
  const overlayLogin = document.getElementById('login-overlay');
  const closeLogin = document.getElementById('close-login');
  const formLogin = document.getElementById('login-form');
  const registerLink = document.getElementById('register-link');

  const overlayRegister = document.getElementById('register-overlay');
  const closeRegister = document.getElementById('close-register');
  const formRegister = document.getElementById('register-form');
  const backLogin = document.getElementById('back-login');

  const btnExplorar = document.querySelector(".btn-hero");

  // ===== MODALES =====
  function abrirLogin() { overlayLogin.style.display = "flex"; }
  function cerrarLogin() { overlayLogin.style.display = "none"; }
  function abrirRegister() { overlayRegister.style.display = "flex"; }
  function cerrarRegister() { overlayRegister.style.display = "none"; }

  closeLogin.addEventListener("click", cerrarLogin);
  closeRegister.addEventListener("click", cerrarRegister);

  overlayLogin.addEventListener("click", e => { if(e.target===overlayLogin) cerrarLogin(); });
  overlayRegister.addEventListener("click", e => { if(e.target===overlayRegister) cerrarRegister(); });

  registerLink.addEventListener("click", e => { e.preventDefault(); cerrarLogin(); abrirRegister(); });
  backLogin.addEventListener("click", e => { e.preventDefault(); cerrarRegister(); abrirLogin(); });

  openLogin.addEventListener("click", () => {
    const usuarioRegistrado = localStorage.getItem("usuarioRegistrado");
    const usuarioLogueado = localStorage.getItem("logueado") === "true";

    if(usuarioRegistrado && usuarioLogueado){
      if(confirm("Ya has iniciado sesión. ¿Deseas cerrar sesión?")){
        localStorage.removeItem("logueado");
        localStorage.removeItem("usuarioRegistrado");
        localStorage.removeItem("passwordRegistrada");
        alert("Sesión cerrada correctamente.");
      }
    } else {
      abrirLogin();
    }
  });

  // ===== REGISTRO =====
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("reg-email").value.trim();
    const password = document.getElementById("reg-password").value.trim();
    const confirm = document.getElementById("reg-confirm").value.trim();

    if(password !== confirm){
      alert("Las contraseñas no coinciden ❌");
      return;
    }

    localStorage.setItem("usuarioRegistrado", email);
    localStorage.setItem("passwordRegistrada", password);
    localStorage.setItem("logueado", "true"); // inicia sesión automáticamente
    cerrarRegister();
    alert("Registro exitoso ✅ Ahora puedes explorar las recetas.");
  });

  // ===== LOGIN =====
  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    const emailReg = localStorage.getItem("usuarioRegistrado");
    const passReg = localStorage.getItem("passwordRegistrada");

    if(email === emailReg && password === passReg){
      localStorage.setItem("logueado", "true");
      cerrarLogin();
      alert("Inicio de sesión exitoso ✅ Ahora puedes explorar las recetas.");
    } else {
      alert("Correo o contraseña incorrectos ❌");
    }
  });

  // ===== BOTÓN EXPLORAR RECETAS =====
  btnExplorar.addEventListener("click", (e) => {
    const usuarioRegistrado = localStorage.getItem("usuarioRegistrado");
    const usuarioLogueado = localStorage.getItem("logueado") === "true";

    if(!usuarioRegistrado){
      e.preventDefault();
      abrirRegister();
      alert("Debes crear una cuenta para acceder a las recetas.");
      return;
    }

    if(!usuarioLogueado){
      e.preventDefault();
      abrirLogin();
      alert("Debes iniciar sesión para acceder a las recetas.");
      return;
    }

    // Si pasa ambas condiciones, deja entrar normalmente
  });
});