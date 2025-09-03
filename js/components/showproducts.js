function showproducts(products, productcontainer) {
    products.forEach((prod) => {
        productcontainer.innerHTML += `
        <div class="card shadow-xl" style="background-color: #F5F5DC;">
        <figure>
            <img src="${prod.imagen}" alt="${prod.nombre}" class="h-70 w-full object-cover" />
        </figure>
        <div class="card-body">
            <h2 class="card-title">${prod.nombre}</h2>
            <p class="font-bold">${prod.precio}</p>
            <p>${prod.descripcion}</p>
            <div class="card-actions">
            <button class="btn w-full btn bg-amber-100 btn-outline btn-hover"
                onclick="window.location.href='${prod.url}'">
                Cotizar
            </button>
            </div>
        </div>
        </div>
    `;
    });
}