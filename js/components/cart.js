function addToCart(productId) {
    const productos = window.productosCatalogo || [];
    const producto = productos.find(p => p.id == productId);
    if (!producto) return;

    // Obtener el carrito actual
    let carrito = JSON.parse(localStorage.getItem("cart")) || [];

    // Verificar si ya está en el carrito
    const index = carrito.findIndex(p => p.id == productId);
    if (index > -1) {
        carrito[index].cantidad += 1;
    } else {
        const nuevoProducto = { ...producto, cantidad: 1 };
        carrito.push(nuevoProducto);
    }

    // Guardar en localStorage
    localStorage.setItem("cart", JSON.stringify(carrito));

    // Feedback al usuario
    alert(`${producto.nombre} añadido al carrito 🛒`);
}
