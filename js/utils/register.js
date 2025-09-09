console.log("register.js cargado ");

window.addEventListener("load", function () {
  const form = document.getElementById("registerForm");
  if (!form) {
    console.error("No se encontró el formulario de registro");
    return;
  }

  document.getElementById("email").addEventListener("input", function () {
    const emailHelp = document.getElementById("emailHelp");
    if (authManager.esCorreoDuoc(this.value)) {
      emailHelp.style.display = "block";
    } else {
      emailHelp.style.display = "none";
    }
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log("Submit de registro detectado ");

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const fechaNacimiento = document.getElementById("fechaNacimiento").value;

    if (password !== confirmPassword) {
      mostrarMensaje("mensaje", "Las contraseñas no coinciden");
      return;
    }

    try {
      authManager.registrarUsuario(nombre, email, password, fechaNacimiento);
      mostrarMensaje("mensaje", "¡Cuenta creada exitosamente! Redirigiendo a Login...", false);
      setTimeout(() => {
        window.location.href = "login.html";
      }, 1000);
    } catch (error) {
      mostrarMensaje("mensaje", error.message);
    }
  });
});
