
function contenidoProductos () {
    let contenidoHtml= ""

    for (const producto of productos) {
        contenidoHtml += `<div class= col-md-4>
                <div class="card border-0 text-center" style="width: 18rem;">
                <a href="producto.html" onclick= "guardarProducto(${producto.id});">
                 <img src="imagenes/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                </a>
                <div class="card-body">
                <h2 class="card-title">${producto.nombre}</h2>
                <p class="card-text fw-medium">${producto.cepa}</p>
                <p class="card-text fw-medium">${producto.Bodega}</p>
                <p class="card-text fw-medium text-danger">$${producto.Precio} ARS</p>
                <p class="card-text"><button class="btn btn-primary rounded-pill" onclick="agregarProducto(${producto.id});">Agregar al Carrito</button></p>
                </div>
                </div>
                </div>`
    }
    document.getElementById("contenido").innerHTML= contenidoHtml
    
}

contenidoProductos();
botonCarrito();

