function detalleCarrito () {
    const carrito = sumarCarrito();
    let contenidoHtml;

    if (totalProductos() > 0){
        contenidoHtml= `<table class="table justify-content-center">
        <tbody>
        <tr>
        <td class= "text-end" colspan="5"><button class= "btn btn-danger" onclick= "vaciarCarrito ();">Vaciar Carrito <i class="bi bi-trash"></i></button></td>
        </tr>`
        
    
        for (const producto of carrito) {
            contenidoHtml += `<tr class= "text-center align-middle" >
                    <td><img src= "imagenes/${producto.imagen}" alt= "${producto.nombre}" width= "90"></td>
                    <td>${producto.nombre}</td>
                    <td>${producto.cepa}</td>
                    <td><span class= "text-danger">$${producto.Precio} ARS</span></td>
                    <td class= "text-end"><button class= "btn btn-danger" onclick= "eliminarProducto(${producto.id});">Eliminar Producto</button></td>
                    </tr>`
        }
            contenidoHtml += `</tbody>
            </table>`
    }else{
        contenidoHtml= `<div class="alert alert-danger" role="alert">
        <h3 class= "text-center">Tu carrito esta vacio 😢</h3>
        </div>`
    }    
    
    document.getElementById("contenido").innerHTML= contenidoHtml
    
}

detalleCarrito();
botonCarrito();