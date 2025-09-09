// auth.js - Manejo de autenticación y usuarios

class AuthManager {
  constructor() {
    this.users = JSON.parse(localStorage.getItem('users')) || [];
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
  }

  validarEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) edad--;
    return edad >= 18;
  }

  esCorreoDuoc(correo) {
    return correo.endsWith('@duoc.cl') || correo.endsWith('@duocuc.cl');
  }

  validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  validarPassword(password) {
    return password.length >= 6;
  }

  registrarUsuario(nombre, email, password, fechaNacimiento) {
    if (!this.validarEmail(email)) throw new Error('Por favor ingresa un email válido');
    if (!this.validarPassword(password)) throw new Error('La contraseña debe tener al menos 6 caracteres');
    if (!this.validarEdad(fechaNacimiento)) throw new Error('Debes ser mayor de 18 años para registrarte');
    if (this.users.find(user => user.email === email)) throw new Error('Este email ya está registrado');

    const nuevoUsuario = {
      id: Date.now(),
      nombre,
      email,
      password,
      fechaNacimiento,
      esDuoc: this.esCorreoDuoc(email),
      fechaRegistro: new Date().toISOString(),
      puntosLevelUp: 0,
      nivel: 1
    };

    this.users.push(nuevoUsuario);
    localStorage.setItem('users', JSON.stringify(this.users));

    return nuevoUsuario;
  }

  iniciarSesion(email, password) {
    const usuario = this.users.find(user => user.email === email && user.password === password);
    if (!usuario) throw new Error('Email o contraseña incorrectos');
    this.currentUser = usuario;
    localStorage.setItem('currentUser', JSON.stringify(usuario));
    return usuario;
  }

  cerrarSesion() {
    this.currentUser = null;
    localStorage.removeItem('currentUser');
  }

  estaAutenticado() {
    return this.currentUser !== null;
  }

  obtenerUsuarioActual() {
    return this.currentUser;
  }

  tieneDescuentoDuoc() {
    return this.currentUser && this.currentUser.esDuoc;
  }
}

const authManager = new AuthManager();

function togglePassword(inputId, iconId) {
  const passwordInput = document.getElementById(inputId);
  const eyeIcon = document.getElementById(iconId);

  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
    eyeIcon.classList.replace('fa-eye', 'fa-eye-slash');
  } else {
    passwordInput.type = 'password';
    eyeIcon.classList.replace('fa-eye-slash', 'fa-eye');
  }
}

function verificarAutenticacion() {
  if (authManager.estaAutenticado()) {
    window.location.href = 'index.html';
  }
}

function requerirAutenticacion() {
  if (!authManager.estaAutenticado()) {
    window.location.href = 'login.html';
  }
}

function mostrarMensaje(elementId, mensaje, esError = true) {
  const element = document.getElementById(elementId);
  element.textContent = mensaje;
  element.style.display = 'block';
  element.className = esError ? 'mensaje-error' : 'mensaje-exito';
  if (!esError) {
    setTimeout(() => {
      element.style.display = 'none';
    }, 3000);
  }
}
