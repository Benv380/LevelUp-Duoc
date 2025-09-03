function showproducts(products, productcontainer) {
    // limpiar antes de renderizar
    productcontainer.innerHTML = "";

    if (!products || products.length === 0) {
        productcontainer.innerHTML = "<p>No hay productos en esta categoría.</p>";
        return;
    }

    products.forEach((prod) => {
        productcontainer.innerHTML += `
            <div class="card shadow-xl" style="background-color: #1E90FF;">
                <figure>
                    <img src="${prod.imagen}" alt="${prod.nombre}" class="h-70 w-full object-cover" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">${prod.nombre}</h2>
                    <p class="font-bold">${prod.precio}</p>
                    <p>${prod.descripcion}</p>
                    <div class="card-actions">
                        <button type="button" style="background-color: #39FF14; font-family: 'Roboto', sans-serif; color: #1E90FF;" class="btn btn-outline-success">Agregar al carro</button>
                    </div>
                </div>
            </div>
        `;
    });
}
