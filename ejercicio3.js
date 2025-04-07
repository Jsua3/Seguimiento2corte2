    // Lista de productos disponibles
const productos = new Map([
    [1, {nombre: 'Manzana', precio: 1500, stock: 50}],
    [2, {nombre: 'Banana', precio: 1000, stock: 100}],
    [3, {nombre: 'Naranja', precio: 2000, stock: 30}],
    [4, {nombre: 'Kiwi', precio: 8000, stock: 20}],
    [5, {nombre: 'Leche', precio: 1500, stock: 100}],
    [6, {nombre: 'Arroz', precio: 3000, stock: 100}],
    [7, {nombre: 'Papas', precio: 1500, stock: 100}],
    [8, {nombre: 'PolloDelAra', precio: 15000, stock: 100}],
    [9, {nombre: 'pan', precio: 1500, stock: 100}]

]);


const carrito = new Map();


function agregarAlCarrito(idProducto, cantidad) {

    if (!productos.has(idProducto)) {
        alert('Producto no encontrado.');
        return;
    }

    const producto = productos.get(idProducto);


    if (producto.stock < cantidad) {
        alert(`Stock insuficiente. Solo quedan ${producto.stock} unidad/es de ${producto.nombre}.`);
        return;
    }


    producto.stock -= cantidad;


    if (carrito.has(idProducto)) {
        carrito.set(idProducto, carrito.get(idProducto) + cantidad);
    } else {
        carrito.set(idProducto, cantidad);
    }

    alert(`${producto.nombre} agregado al carrito (${cantidad} unidad/es).`);
}


function mostrarCarrito() {
    let mensaje = 'Productos en el carrito:\n';
    let total = 0;

    if (carrito.size === 0) {
        alert('El carrito está vacío.');
        return;
    }

    carrito.forEach((cantidad, idProducto) => {
        const {nombre, precio} = productos.get(idProducto);
        const subtotal = cantidad * precio;
        total += subtotal;
        mensaje += `- ${nombre}: ${cantidad} unidad/es x $${precio.toFixed(2)} = $${subtotal.toFixed(2)}\n`;
    });

    mensaje += `\nTotal: $${total.toFixed(2)}`;
    alert(mensaje);
}

function vaciarCarrito() {
    carrito.forEach((cantidad, idProducto) => {
        // Revertir el stock de cada producto
        const producto = productos.get(idProducto);
        producto.stock += cantidad;
    });
    // Limpiar el carrito
    carrito.clear();
    alert('El carrito ha sido vaciado.');
}

function iniciarCompra() {
    while (true) {
        const opcion = prompt(
            `Seleccione una opción:\n` +
            `1. Ver productos disponibles\n` +
            `2. Agregar producto al carrito\n` +
            `3. Ver carrito\n` +
            `4. Vaciar carrito\n` +
            `5. Salir`
        );

        if (opcion === '1') {

            let mensaje = 'Productos disponibles:\n';
            productos.forEach((producto, id) => {
                mensaje += `${id}. ${producto.nombre} - $${producto.precio.toFixed(2)} (Stock: ${producto.stock})\n`;
            });
            alert(mensaje);
        } else if (opcion === '2') {

            const idProducto = parseInt(prompt('Ingrese el ID del producto que desea agregar:'));
            const cantidad = parseInt(prompt('Ingrese la cantidad que desea agregar:'));

            if (!isNaN(idProducto) && !isNaN(cantidad) && cantidad > 0) {
                agregarAlCarrito(idProducto, cantidad);
            } else {
                alert('Datos inválidos. Por favor, intente de nuevo.');
            }
        } else if (opcion === '3') {

            mostrarCarrito();
        } else if (opcion === '4') {

            vaciarCarrito();
        } else if (opcion === '5') {

            alert('Gracias por su compra. ¡Hasta luego!');
            break;
        } else {
            alert('Opción no válida. Por favor, intente de nuevo.');
        }
    }
}


iniciarCompra();