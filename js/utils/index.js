// index.js

// Leer usuario activo desde localStorage
const usuarioActivo = JSON.parse(localStorage.getItem("currentUser"));

// Referencia al botón de la navbar
const navbarBtn = document.getElementById("navbar-btn");

// Referencia al mensaje de bienvenida
const welcomeText = document.getElementById("welcome");

if (usuarioActivo) {
  if (welcomeText) {
    welcomeText.textContent = "Bienvenido, " + usuarioActivo.nombre;
  }

  if (navbarBtn) {
    navbarBtn.textContent = "Cerrar sesión";
    navbarBtn.href = "#";

    navbarBtn.addEventListener("click", () => {
      localStorage.removeItem("currentUser");
      alert("Has cerrado sesión 👋");
      window.location.href = "index.html";
    });
  }
} else {
  if (navbarBtn) {
    navbarBtn.textContent = "Login / Registro";
    navbarBtn.href = "./login.html";
  }

  if (welcomeText) {
    welcomeText.textContent = "No has iniciado sesión.";
  }
}
