function showproducts(products, productcontainer) {
    // limpiar antes de renderizar
    productcontainer.innerHTML = "";

    if (!products || products.length === 0) {
        productcontainer.innerHTML = "<p>No hay productos en esta categoría.</p>";
        return;
    }

    products.forEach((prod) => {
        productcontainer.innerHTML += `
        <div class="col-12 col-sm-6 col-md-3 col-lg-3 mb-4">
                <div class="card h-100 shadow" style="background-color: #1E90FF; color: #39FF14; border-radius: 8px; font-family: 'Roboto', sans-serif;">
                    <img src="${prod.imagen || 'https://via.placeholder.com/300'}" 
                         class="card-img-top rounded-top" 
                         alt="${prod.nombre}">
                    <div class="card-body d-flex flex-column">
                        <h4 class="card-title">${prod.nombre}</h4>
                        <p class="mb-1"><strong>${prod.categoria}</strong></p>
                        <p class="text-muted medium">${prod.descripcion}</p>
                        <button type="button"
                                class="btn btn-outline-dark mt-auto fw-bold"
                                style="background-color: #1E90FF; border-color: #39FF14; color: #39FF14; font-family: 'Roboto', sans-serif;">
                            Cotizar
                        </button>
                    </div>
                </div>
            </div>
        `;
    });
}
