console.log("login.js cargado ");

window.addEventListener("load", function () {
  const form = document.getElementById("loginForm");
  if (!form) {
    console.error("No se encontró el formulario de login");
    return;
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit de login detectado ");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      authManager.iniciarSesion(email, password);
      mostrarMensaje("mensaje", "¡Inicio de sesión exitoso! Redirigiendo...", false);
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    } catch (error) {
      mostrarMensaje("mensaje", error.message);
    }
  });
});
