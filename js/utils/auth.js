// =========================
// Elementos
// =========================
const loginTab = document.getElementById("loginTab");
const registerTab = document.getElementById("registerTab");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");

// Botones del formulario
const loginBtn = loginForm.querySelector("button");
const registerBtn = registerForm.querySelector("button");

// =========================
// Función para actualizar visual del tab y botón
// =========================
function activateTab(tab) {
    if(tab === "login") {
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        loginTab.classList.add("active");
        registerTab.classList.remove("active");

        // Cambiar color del botón
        loginBtn.classList.remove("btn-success");
        loginBtn.classList.add("btn-primary");
        loginBtn.textContent = "Iniciar sesión";
    } else if(tab === "register") {
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        registerTab.classList.add("active");
        loginTab.classList.remove("active");

        // Cambiar color del botón
        registerBtn.classList.remove("btn-primary");
        registerBtn.classList.add("btn-success");
        registerBtn.textContent = "Registrarse";
    }
}

// =========================
// Alternar Tabs
// =========================
loginTab.addEventListener("click", () => activateTab("login"));
registerTab.addEventListener("click", () => activateTab("register"));

// =========================
// Registro de Usuario
// =========================
registerForm.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value.trim();
    const dob = document.getElementById("registerDob").value;

    // Validar edad >= 18
    const birth = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    if(today.getMonth() < birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() < birth.getDate())) age--;

    if(age < 18){
        registerMessage.textContent = "Debes tener al menos 18 años.";
        registerMessage.style.color = "red";
        return;
    }

    // Guardar usuario en localStorage
    const user = {name, email, password, dob};
    localStorage.setItem("user", JSON.stringify(user));

    registerMessage.textContent = "✅ Registro exitoso. Ahora inicia sesión.";
    registerMessage.style.color = "green";

    // Cambiar automáticamente a login
    setTimeout(() => activateTab("login"), 1500);
});

// =========================
// Inicio de Sesión
// =========================
loginForm.addEventListener("submit", e => {
    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if(savedUser && savedUser.email === email && savedUser.password === password){
        loginMessage.textContent = "✅ Bienvenido " + savedUser.name;
        loginMessage.style.color = "green";

        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("usuarioActivo", savedUser.name);

        setTimeout(() => window.location.href = "index.html", 1500);
    } else {
        loginMessage.textContent = "❌ Correo o contraseña incorrectos.";
        loginMessage.style.color = "red";
    }
});
