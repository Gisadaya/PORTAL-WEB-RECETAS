document.addEventListener('DOMContentLoaded', () => {
  const openLogin = document.getElementById('open-login');
  const overlayLogin = document.getElementById('login-overlay');
  const closeLogin = document.getElementById('close-login');
  const formLogin = document.getElementById('login-form');
  const registerLink = document.getElementById('register-link');

  // Elementos del registro
  const overlayRegister = document.getElementById('register-overlay');
  const closeRegister = document.getElementById('close-register');
  const formRegister = document.getElementById('register-form');

  // Verificar elementos básicos
  if (!openLogin || !overlayLogin || !closeLogin || !formLogin) {
    console.warn('Faltan elementos del modal de login.');
    return;
  }

  // === ABRIR LOGIN ===
  openLogin.addEventListener('click', () => {
    const saved = localStorage.getItem('foodware_user');
    if (saved) {
      const userObj = JSON.parse(saved);
      if (confirm(`Ya has iniciado sesión como ${userObj.email}.\n¿Deseas cerrar sesión?`)) {
        cerrarSesion();
      }
    } else {
      overlayLogin.style.display = 'flex';
      const emailInput = document.getElementById('email');
      if (emailInput) emailInput.focus();
    }
  });

  // === CERRAR LOGIN ===
  closeLogin.addEventListener('click', () => (overlayLogin.style.display = 'none'));
  overlayLogin.addEventListener('click', (e) => {
    if (e.target === overlayLogin) overlayLogin.style.display = 'none';
  });

  // === VALIDAR LOGIN ===
  formLogin.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formLogin.querySelector('#email').value.trim();
    const password = formLogin.querySelector('#password').value.trim();

    const savedUser = JSON.parse(localStorage.getItem('foodware_user') || '{}');
    if (savedUser.email !== email || savedUser.password !== password) {
      alert('Correo o contraseña incorrectos. Si no tienes cuenta, regístrate.');
      return;
    }

    actualizarBotonUsuario(email);
    overlayLogin.style.display = 'none';
    alert('Inicio de sesión exitoso ✓');
  });

  // === ABRIR REGISTRO ===
  registerLink.addEventListener('click', (e) => {
    e.preventDefault();
    overlayLogin.style.display = 'none';
    overlayRegister.style.display = 'flex';
    const emailInput = document.getElementById('reg-email');
    if (emailInput) emailInput.focus();
  });

  // === CERRAR REGISTRO ===
  closeRegister.addEventListener('click', () => (overlayRegister.style.display = 'none'));
  overlayRegister.addEventListener('click', (e) => {
    if (e.target === overlayRegister) overlayRegister.style.display = 'none';
  });

  // === VALIDAR REGISTRO ===
  formRegister.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = formRegister.querySelector('#reg-email').value.trim();
    const password = formRegister.querySelector('#reg-password').value.trim();
    const confirm = formRegister.querySelector('#reg-confirm').value.trim();

    if (!/\S+@\S+\.\S+/.test(email)) {
      alert('Por favor ingresa un correo válido.');
      return;
    }
    if (password.length < 4) {
      alert('La contraseña debe tener al menos 4 caracteres.');
      return;
    }
    if (password !== confirm) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    const usuario = { email, password, createdAt: new Date().toISOString() };
    localStorage.setItem('foodware_user', JSON.stringify(usuario));

    overlayRegister.style.display = 'none';
    actualizarBotonUsuario(email);
    alert('Registro exitoso ✓ Tu sesión se ha iniciado.');
  });

  // === FUNCIONES ===
  function actualizarBotonUsuario(email) {
    openLogin.innerHTML = `<i class="fas fa-user-circle"></i> ${email}`;
    openLogin.classList.add('logged');
  }

  function cerrarSesion() {
    localStorage.removeItem('foodware_user');
    openLogin.innerHTML = `<i class="fas fa-sign-in-alt"></i> Iniciar sesión`;
    openLogin.classList.remove('logged');
    alert('Sesión cerrada correctamente.');
  }

  // === REVISAR SESIÓN GUARDADA ===
  const saved = localStorage.getItem('foodware_user');
  if (saved) {
    try {
      const userObj = JSON.parse(saved);
      if (userObj && userObj.email) actualizarBotonUsuario(userObj.email);
    } catch (err) {
      console.warn('Error al leer usuario guardado:', err);
    }
  }
});