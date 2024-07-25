function renderProducto() {
    const producto= cargarProducto();
    let imagenProducto = `<img src="imagenes/${producto.imagen}" class= "img-fluid" alt=${producto.nombre} />`;
    let htmlProducto= `<h2 class="fs-1">${producto.nombre}</h2>
    <p class="fw-medium fs-4">${producto.cepa}</p>
    <p class="fw-medium fs-4">${producto.Bodega}</p>
    <p class="fw-medium text-danger">$${producto.Precio} ARS</p>
    <p class="card-text"><button class="btn btn-primary rounded-pill" onclick="agregarProducto(${producto.id});">Agregar al Carrito</button></p>`
    document.getElementById("imgProducto").innerHTML= imagenProducto;
    document.getElementById("detalleProducto").innerHTML= htmlProducto

        console.log(producto);
}

renderProducto();
botonCarrito();