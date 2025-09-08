// index.js

// Leer usuario activo desde localStorage
const usuarioActivo = localStorage.getItem("usuarioActivo");

// Referencia al botón de la navbar
const navbarBtn = document.getElementById("navbar-btn");

// Referencia al mensaje de bienvenida
const welcomeText = document.getElementById("welcome");

// Si hay un usuario activo
if (usuarioActivo) {
  // Mostrar mensaje de bienvenida
  if (welcomeText) {
    welcomeText.textContent = "Bienvenido, " + usuarioActivo;
  }

  // Cambiar botón de la navbar a "Cerrar sesión"
  if (navbarBtn) {
    navbarBtn.textContent = "Cerrar sesión";
    navbarBtn.href = "#"; // evita que navegue a otra página

    // Acción al clickear: cerrar sesión
    navbarBtn.addEventListener("click", () => {
      localStorage.removeItem("usuarioActivo"); // borrar sesión
      alert("Has cerrado sesión 👋");
      window.location.href = "index.html"; // recargar a home
    });
  }
} else {
  // Si no hay sesión activa → botón de Login/Registro
  if (navbarBtn) {
    navbarBtn.textContent = "Login / Registro";
    navbarBtn.href = "auth.html";
  }

  if (welcomeText) {
    welcomeText.textContent = "No has iniciado sesión.";
  }
}
