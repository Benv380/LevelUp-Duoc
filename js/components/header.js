var header1 = `
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <img src="assets/img/Logo - Level Up.png" alt="LevelUp" class="navbar-brand" style="height:100px;">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item"><a class="nav-link active" href="index.html">Home</a></li>
          <li class="nav-item"><a class="nav-link active" href="catalogo.html">Catálogo</a></li>
          <li class="nav-item categorias">
            <a class="nav-link" href="#" role="button" data-bs-toggle="categoria">Categorias</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
          <button class="btn btn-outline-success" type="submit">Buscar</button>
        </form>
        <!-- Botón dinámico -->
        <a id="navbar-btn" class="btn btn-primary ms-3"></a>
        <a href="./carrito.html"><img src="Assets/img/carrito-de-compras-512x512.png" alt="" style="width: 50px; height: 50px;"></a>
      </div>
    </div>
  </nav>
`;

document.getElementById("header").innerHTML = header1;
const btn = document.getElementById("navbar-btn");
if (header.dataset.btnVisible === "false") {
  btn.style.display = "none";
} else {
  btn.textContent = header.dataset.btnText;
  btn.setAttribute("href", header.dataset.btnHref);
}
