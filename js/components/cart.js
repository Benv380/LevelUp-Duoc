function addToCart(productId) {
    const productos = window.productosCatalogo || [];
    const producto = productos.find(p => p.id == productId);
    if (!producto) return;
    // Obtener el carrito actual
    let carrito = JSON.parse(localStorage.getItem("producto")) || [];
    // Verificar si ya está en el carrito
    const index = carrito.findIndex(p => p.id == productId);
    if (index > -1) {
        carrito[index].cantidad += 1;
    } else {
        const nuevoProducto = { ...producto, cantidad: 1 };
        carrito.push(nuevoProducto);
    }
    // Guardar en localStorage
    localStorage.setItem("producto", JSON.stringify(carrito));
}